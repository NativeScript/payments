package org.nativescript.plugins.payments

import com.android.billingclient.api.AcknowledgePurchaseParams
import com.android.billingclient.api.BillingClient
import com.android.billingclient.api.ConsumeParams
import com.android.billingclient.api.Purchase
import org.json.JSONObject

class Transaction(val purchase: Purchase, val type: Product.Type, private val payments: Payments) {

  enum class State(val value: Int) {
    Unknown(-1), Purchased(1), Pending(2)
  }

  val orderId: String?
    get() {
      return purchase.orderId
    }

  val productId: String?
    get() {
      return purchase.products.first()
    }

  val isAcknowledged: Boolean
    get() {
      return purchase.isAcknowledged
    }

  val orderDate: Long
    get() {
      return purchase.purchaseTime
    }

  val isAutoRenewing: Boolean
    get() {
      return purchase.isAutoRenewing
    }

  val isExpired: Boolean
    get() {
      if (type == Product.Type.Subs) {
        return !purchase.isAutoRenewing
      }
      return false
    }

  val products: List<String>
    get() {
      return purchase.products
    }

  val quantity: Int
    get() {
      return purchase.quantity
    }

  val token: String
    get() {
      return purchase.purchaseToken
    }

  val signature: String
    get() {
      return purchase.signature
    }

  val state: State
    get() {
      return when (purchase.purchaseState) {
        Purchase.PurchaseState.PURCHASED -> State.Purchased
        Purchase.PurchaseState.PENDING -> State.Pending
        else -> State.Unknown
      }
    }

  val developerPayload: String
    get() {
      return purchase.developerPayload
    }

  val originalJsonString: String
    get() {
      return purchase.originalJson
    }

  private var json: JSONObject? = null
  val originalJson: JSONObject
    get() {
      if (json == null) {
        try {
          json = JSONObject(purchase.originalJson)
        } catch (_: Exception) {
        }
      }
      return json ?: JSONObject()
    }

  fun finish(consume: Boolean, callback: (Payments.BillingResponse?) -> Unit) {
    if (purchase.isAcknowledged) {
      callback(null)
      return
    }
    if (purchase.isAutoRenewing) {
      val params = AcknowledgePurchaseParams.newBuilder()
        .setPurchaseToken(purchase.purchaseToken)
        .build()
      payments.billing.acknowledgePurchase(params) { p0 ->
        if (p0.responseCode == BillingClient.BillingResponseCode.OK) {
          callback(null)
        } else {
          callback(Payments.mapResponseCode(p0.responseCode))
        }
      }

    } else {
      if (consume) {
        val params = ConsumeParams.newBuilder()
          .setPurchaseToken(purchase.purchaseToken)
          .build()

        payments.billing.consumeAsync(params) { p0, p1 ->
          if (p0.responseCode == BillingClient.BillingResponseCode.OK) {
            callback(null)
          } else {
            callback(Payments.mapResponseCode(p0.responseCode))
          }
        }
      } else {
        val params = AcknowledgePurchaseParams.newBuilder()
          .setPurchaseToken(purchase.purchaseToken)
          .build()
        payments.billing.acknowledgePurchase(params) { p0 ->
          if (p0.responseCode == BillingClient.BillingResponseCode.OK) {
            callback(null)
          } else {
            callback(Payments.mapResponseCode(p0.responseCode))
          }
        }
      }
    }
  }
}
