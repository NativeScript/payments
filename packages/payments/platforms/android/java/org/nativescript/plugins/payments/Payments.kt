package org.nativescript.plugins.payments

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.util.Log
import com.android.billingclient.api.BillingClient
import com.android.billingclient.api.BillingClientStateListener
import com.android.billingclient.api.BillingFlowParams
import com.android.billingclient.api.BillingResult
import com.android.billingclient.api.PendingPurchasesParams
import com.android.billingclient.api.PurchasesUpdatedListener
import com.android.billingclient.api.QueryProductDetailsParams
import com.android.billingclient.api.QueryPurchasesParams
import org.json.JSONObject
import java.util.concurrent.CountDownLatch
import java.util.concurrent.Executors

class Payments(context: Context) {
    private var isReady = false
    private var isSetup = false
    private val purchaseListener = PurchasesUpdatedListener { response, purchases ->
        if (response.responseCode == BillingClient.BillingResponseCode.OK && purchases != null) {
            val value = purchases.map {
                val json = JSONObject(it.originalJson)
                Transaction(
                    it, if (json.optBoolean("autoRenewing", false)) {
                        Product.Type.Subs
                    } else {
                        Product.Type.InApp
                    }, this@Payments
                )
            }
            onPurchaseUpdateListener?.let {
                it(value, null)
            }
        } else {
            onPurchaseUpdateListener?.let {
                it(null, mapResponseCode(response.responseCode))
            }
        }
    }
    internal var billing = BillingClient.newBuilder(context).enablePendingPurchases(
        PendingPurchasesParams.newBuilder().enablePrepaidPlans().enableOneTimeProducts().build()
    ).enableAutoServiceReconnection().setListener(purchaseListener).build()

    private val executor = Executors.newCachedThreadPool()

    var onReadyListener: (() -> Unit)? = null

    var onPurchaseUpdateListener: ((List<Transaction>?, BillingResponse?) -> Unit)? = null

    class BillingResponse(
        val code: Int, val message: String, val resolution: String, val subCode: Int = Int.MAX_VALUE
    ) {
        val raw: String
            get() {
                if (subCode == BillingClient.OnPurchasesUpdatedSubResponseCode.USER_INELIGIBLE) {
                    return "USER_INELIGIBLE"
                } else if (subCode == BillingClient.OnPurchasesUpdatedSubResponseCode.PAYMENT_DECLINED_DUE_TO_INSUFFICIENT_FUNDS) {
                    return "INSUFFICIENT_FUNDS"
                }

                return when (code) {
                    BillingClient.BillingResponseCode.OK -> "OK"

                    BillingClient.BillingResponseCode.BILLING_UNAVAILABLE -> "NETWORK_ERROR"

                    BillingClient.BillingResponseCode.NETWORK_ERROR -> "NETWORK_ERROR"

                    BillingClient.BillingResponseCode.USER_CANCELED -> "USER_CANCELED"

                    BillingClient.BillingResponseCode.ITEM_UNAVAILABLE -> "ITEM_UNAVAILABLE"

                    BillingClient.BillingResponseCode.DEVELOPER_ERROR -> "DEVELOPER_ERROR"

                    BillingClient.BillingResponseCode.FEATURE_NOT_SUPPORTED -> "FEATURE_NOT_SUPPORTED"

                    BillingClient.BillingResponseCode.ITEM_ALREADY_OWNED -> "ITEM_ALREADY_OWNED"

                    BillingClient.BillingResponseCode.ITEM_NOT_OWNED -> "ITEM_NOT_OWNED"

                    BillingClient.BillingResponseCode.SERVICE_UNAVAILABLE -> "SERVICE_UNAVAILABLE"

                    BillingClient.BillingResponseCode.SERVICE_DISCONNECTED -> "SERVICE_DISCONNECTED"

                    BillingClient.BillingResponseCode.SERVICE_TIMEOUT -> "SERVICE_TIMEOUT"

                    BillingClient.BillingResponseCode.ERROR -> "ERROR"
                    else -> "UNSPECIFIED"
                }
            }
    }

    enum class Features(val value: String) {
        Subscriptions(BillingClient.FeatureType.SUBSCRIPTIONS), SubscriptionsUpdate(BillingClient.FeatureType.SUBSCRIPTIONS_UPDATE), PriceChangeConfirmation(
            BillingClient.FeatureType.PRICE_CHANGE_CONFIRMATION
        ),
        InAppMessaging(BillingClient.FeatureType.IN_APP_MESSAGING), ProductDetails(BillingClient.FeatureType.PRODUCT_DETAILS), BillingConfig(
            BillingClient.FeatureType.BILLING_CONFIG
        ),
        AlternativeBillingOnly(BillingClient.FeatureType.ALTERNATIVE_BILLING_ONLY), ExternalOffer(
            BillingClient.FeatureType.EXTERNAL_OFFER
        ),
    }

    class PurchaseOptions {
        enum class ReplacementMode(val value: Int) {
            Unknown(0), WithTimeProration(1), ChargeProratedPrice(2), WithoutProration(3), ChargeFullPrice(
                5
            ),
            Deferred(6);
        }

        var profileId: String? = null
        var accountId: String? = null
        var setIsOfferPersonalized = false
        var subscriptionUpdateToken: String? = null
        var subscriptionUpdateReplacementMode: ReplacementMode? = null
    }

    init {
        billing.startConnection(object : BillingClientStateListener {
            override fun onBillingServiceDisconnected() {
                this@Payments.isReady = false
            }

            override fun onBillingSetupFinished(p0: BillingResult) {
                isSetup = p0.responseCode == BillingClient.BillingResponseCode.OK
                if (!this@Payments.isReady) {
                    this@Payments.isReady = true
                    onReadyListener?.let {
                        it()
                    }
                }
            }
        })
    }


    fun connect() {
        when (billing.connectionState) {
            BillingClient.ConnectionState.DISCONNECTED, BillingClient.ConnectionState.CLOSED -> {
                billing.startConnection(object : BillingClientStateListener {
                    override fun onBillingServiceDisconnected() {
                        this@Payments.isReady = false
                    }

                    override fun onBillingSetupFinished(p0: BillingResult) {
                        isSetup = p0.responseCode == BillingClient.BillingResponseCode.OK
                        if (!this@Payments.isReady) {
                            this@Payments.isReady = true
                            onReadyListener?.let {
                                it()
                            }
                        }
                    }
                })
            }

            else -> {}
        }
    }

    fun disconnect() {
        billing.endConnection()
    }

    fun showInAppMessaging(activity: Activity) {
//        val params = InAppMessageParams.newBuilder()
//            .apply {
//                addInAppMessageCategoryToShow(InAppMessageParams.InAppMessageCategoryId.TRANSACTIONAL)
//            }
//            .build()
//        billing.showInAppMessages(activity, params, object : InAppMessageResponseListener {
//            override fun onInAppMessageResponse(p0: InAppMessageResult) {
//
//            }
//        })
    }

    fun canMakePayments(): Boolean {
        return isReady && billing.isReady
    }

    fun isFeatureSupported(feature: Features): Boolean {
        if (!billing.isReady) {
            return false
        }
        return billing.isFeatureSupported(feature.value).responseCode == BillingClient.BillingResponseCode.OK
    }

    fun fetchProducts(
        identifiers: Array<String>,
        type: Product.Type,
        callback: (List<Product>?, BillingResponse?) -> Unit
    ) {
        val products = identifiers.map {
            QueryProductDetailsParams.Product.newBuilder().setProductType(type.toType)
                .setProductId(it)
                .build()
        }
        val params = QueryProductDetailsParams.newBuilder().setProductList(products).build()

        billing.queryProductDetailsAsync(params) { p0, p1 ->
            if (p0.responseCode == BillingClient.BillingResponseCode.OK) {
                val products = p1.productDetailsList.map {
                    Product(it)
                }
                callback(products, null)
            } else {
                callback(null, mapResponseCode(p0.responseCode))
            }
        }
    }


    @JvmOverloads
    fun purchaseProduct(
        activity: Activity,
        product: Product,
        options: PurchaseOptions? = null,
        callback: (BillingResponse?) -> Unit
    ) {
        val param = BillingFlowParams.ProductDetailsParams.newBuilder().apply {
            setProductDetails(product.product)
            if (product.type == Product.Type.Subs) {
                product.product.subscriptionOfferDetails?.first()?.let {
                    setOfferToken(it.offerToken)
                }
            }
        }.build()

        val flow = BillingFlowParams.newBuilder().apply {
            options?.let {
                setIsOfferPersonalized(it.setIsOfferPersonalized)
                it.profileId?.let { id ->
                    setObfuscatedProfileId(id)
                }

                it.accountId?.let { id ->
                    setObfuscatedAccountId(id)
                }

                it.subscriptionUpdateToken?.let { token ->
                    val params = BillingFlowParams.SubscriptionUpdateParams.newBuilder().apply {
                        it.subscriptionUpdateReplacementMode?.let { mode ->
                            setSubscriptionReplacementMode(mode.value)
                        }
                    }.setOldPurchaseToken(token).build()

                    setSubscriptionUpdateParams(params)
                }
            }
            setProductDetailsParamsList(listOf(param))
        }.build()

        val response = billing.launchBillingFlow(activity, flow)

        executor.execute {
            if (response.responseCode != BillingClient.BillingResponseCode.OK) {
                val res = when (response.onPurchasesUpdatedSubResponseCode) {
                    BillingClient.OnPurchasesUpdatedSubResponseCode.PAYMENT_DECLINED_DUE_TO_INSUFFICIENT_FUNDS -> {
                        BillingResponse(
                            Int.MAX_VALUE,
                            "The payment was declined due to insufficient funds.",
                            "The user must either add funds/increase limits or retry the transaction with a different payment method",
                            response.onPurchasesUpdatedSubResponseCode
                        )
                    }

                    BillingClient.OnPurchasesUpdatedSubResponseCode.USER_INELIGIBLE -> {
                        BillingResponse(
                            Int.MAX_VALUE,
                            "the user does not currently meet offer eligibility requirements.",
                            "This offer isn’t available in your region or for your account type.”",
                            response.onPurchasesUpdatedSubResponseCode
                        )
                    }

                    else -> {
                        if (enableDebug) {
                            Log.d(
                                "JS",
                                "mapSubResponseCode ${response.onPurchasesUpdatedSubResponseCode}"
                            )
                        }
                        BillingResponse(Int.MAX_VALUE, "", "", Int.MAX_VALUE)
                    }
                }

                callback(res)
                return@execute
            }

            callback(null)
        }
    }

    fun fetchPurchases(callback: (List<Transaction>?, BillingResponse?) -> Unit) {
        executor.execute {
            val inapp =
                QueryPurchasesParams.newBuilder().setProductType(BillingClient.ProductType.INAPP)
                    .build()
            val subs =
                QueryPurchasesParams.newBuilder().setProductType(BillingClient.ProductType.SUBS)
                    .build()
            val ret = arrayOf<MutableList<Transaction>>(mutableListOf(), mutableListOf())
            val error = arrayOfNulls<BillingResponse?>(1)
            val lock = CountDownLatch(2)
            billing.queryPurchasesAsync(inapp) { p0, p1 ->
                if (p0.responseCode == BillingClient.BillingResponseCode.OK) {
                    p1.forEach { purchase ->
                        purchase?.let {
                            ret[0].add(Transaction(it, Product.Type.InApp, this))
                        }
                    }
                } else {
                    error[0] = mapResponseCode(p0.responseCode)
                }
                lock.countDown()
            }

            billing.queryPurchasesAsync(subs) { p0, p1 ->
                if (p0.responseCode == BillingClient.BillingResponseCode.OK) {
                    p1.forEach { purchase ->
                        purchase?.let {
                            ret[1].add(Transaction(it, Product.Type.Subs, this))
                        }
                    }
                } else {
                    error[0] = mapResponseCode(p0.responseCode)
                }
                lock.countDown()
            }

            try {
                lock.await()
                ret[0].addAll(ret[1])
                callback(
                    ret[0], null
                )
            } catch (_: Exception) {
                callback(null, error[0])
            }
        }
    }

    companion object {
        @JvmStatic
        var enableDebug = false

        @JvmStatic
        internal fun mapResponseCode(code: Int): BillingResponse {
            return when (code) {
                BillingClient.BillingResponseCode.OK -> BillingResponse(code, "OK", "")

                BillingClient.BillingResponseCode.BILLING_UNAVAILABLE -> BillingResponse(
                    code,
                    "A user billing error occurred during processing.",
                    "Automatic retries are unlikely to help in this case. However, a manual retry can help if the user addresses the condition that caused the issue."
                )

                BillingClient.BillingResponseCode.NETWORK_ERROR -> BillingResponse(
                    code, "A network error occurred during the operation.", ""
                )

                BillingClient.BillingResponseCode.USER_CANCELED -> BillingResponse(
                    code,
                    "The user has clicked out of the billing flow UI.",
                    "This is informational only and can fail gracefully."
                )

                BillingClient.BillingResponseCode.ITEM_UNAVAILABLE -> BillingResponse(
                    code,
                    "The requested product is not available for purchase.",
                    "Make sure your app refreshes the product details via queryProductDetailsAsync as recommended."
                )

                BillingClient.BillingResponseCode.DEVELOPER_ERROR -> BillingResponse(
                    code,
                    "Error resulting from incorrect usage of the API.",
                    "Make sure that you are correctly using the different Play Billing Library calls. Also, check the debug message for more info about the error."
                )

                BillingClient.BillingResponseCode.FEATURE_NOT_SUPPORTED -> BillingResponse(
                    code,
                    "The requested feature is not supported by the Play Store on the current device.",
                    "Use isFeatureSupported() to check feature support before making the call to the Play Billing Library."
                )

                BillingClient.BillingResponseCode.ITEM_ALREADY_OWNED -> BillingResponse(
                    code,
                    "The purchase failed because the item is already owned.",
                    "To avoid this error happening when the cause is not a cache issue, don't offer a product for purchase when the user already owns it."
                )

                BillingClient.BillingResponseCode.ITEM_NOT_OWNED -> BillingResponse(
                    code,
                    "Requested action on the item failed since it is not owned by the user.",
                    "When the error is received because of a cache issue, the error triggers Google Play’s cache to get updated with the latest data from Play’s backend."
                )

                BillingClient.BillingResponseCode.SERVICE_UNAVAILABLE -> BillingResponse(
                    code,
                    "The service is currently unavailable.",
                    "This is usually a transient issue. Retry the request using either either a simple or exponential backoff strategy, depending on which action returned the error."
                )

                BillingClient.BillingResponseCode.SERVICE_DISCONNECTED -> BillingResponse(
                    code,
                    "The app is not connected to the Play Store service via the Google Play Billing Library.",
                    "To attempt recovery from SERVICE_DISCONNECTED , your client app should try to re-establish the connection using .restartConnection."
                )

                BillingClient.BillingResponseCode.ERROR -> BillingResponse(
                    code,
                    "Fatal error during the API action.",
                    "Sometimes internal Google Play problems that lead to ERROR are transient, and a retry with an exponential backoff can be implemented for mitigation. When users are in session, a simple retry is preferable."
                )

                else -> {
                    if (enableDebug) {
                        Log.d("JS", "mapResponseCode $code")
                    }
                    return BillingResponse(Int.MAX_VALUE, "", "")
                }
            }
        }

        @JvmStatic
        fun isSupported(context: Context): Boolean {
            val playStoreIntent = Intent(Intent.ACTION_VIEW).apply {
                data = Uri.parse("market://details?id=${context.packageName}")
                setPackage("com.android.vending")
            }
            return playStoreIntent.resolveActivity(context.packageManager) != null
        }


        @JvmOverloads
        @JvmStatic
        fun showManageSubscriptions(
            context: Context,
            packageName: String? = null,
            productId: String? = null
        ) {
            var url = "https://play.google.com/store/account/subscriptions"
            productId?.let { id ->
                url = "$url?sku=$id&package=${packageName ?: context.packageName}"
            }
            val uri = Uri.parse(url)
            val intent = Intent(Intent.ACTION_VIEW, uri)
            intent.setPackage("com.android.vending")
            context.startActivity(intent)
        }
    }

}
