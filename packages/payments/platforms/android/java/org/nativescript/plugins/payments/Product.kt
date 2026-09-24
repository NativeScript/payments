package org.nativescript.plugins.payments

import com.android.billingclient.api.BillingClient
import com.android.billingclient.api.ProductDetails

class Product(val product: ProductDetails) {
    enum class Type(val value: Int) {
        InApp(0),
        Subs(1);

        internal val toType: String
            get() {
                return when (this) {
                    InApp -> BillingClient.ProductType.INAPP
                    Subs -> BillingClient.ProductType.SUBS
                }
            }
    }

    val id: String
        get() {
            return product.productId
        }

    val name: String
        get() {
            return product.name
        }

    val title: String
        get() {
            return product.title
        }

    val description: String
        get() {
            return product.description
        }

    val priceAmountMicros: Long?
        get() {
            return product.oneTimePurchaseOfferDetails?.priceAmountMicros
                ?: product.subscriptionOfferDetails?.firstOrNull()?.pricingPhases?.pricingPhaseList?.firstOrNull()?.priceAmountMicros
        }
    
    val priceFormatted: String?
        get() {
            return product.oneTimePurchaseOfferDetails?.formattedPrice
                ?: product.subscriptionOfferDetails?.firstOrNull()?.pricingPhases?.pricingPhaseList?.firstOrNull()?.formattedPrice
        }

    val type: Product.Type
        get() {
            return when (product.productType) {
                BillingClient.ProductType.INAPP -> Type.InApp
                BillingClient.ProductType.SUBS -> Type.Subs
                else -> {
                    throw Error("Unknown ProductType ${product.productType}")
                }
            }
        }
}
