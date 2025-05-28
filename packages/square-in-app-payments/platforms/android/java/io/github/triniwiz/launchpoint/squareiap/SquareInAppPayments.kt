package io.github.triniwiz.launchpoint.squareiap

import android.content.Intent
import sqip.Card
import sqip.handleActivityResult

class SquareInAppPayments {
    interface Callback {
        fun onSuccess(success: Boolean, cancelled: Boolean, card: Card?, nonce: String?)
    }

    companion object {
        @JvmField
        var DEFAULT_CARD_ENTRY_REQUEST_CODE = 1

        @JvmStatic
        var resultListener: Callback? = null

        @JvmStatic
        fun handleActivityResult(requestCode: Int, data: Intent?) {
            if (requestCode == DEFAULT_CARD_ENTRY_REQUEST_CODE) {
                sqip.CardEntry.handleActivityResult(data) {
                    var card: Card? = null
                    var nonce: String? = null
                    val isSuccess = it.isSuccess()
                    if (isSuccess) {
                        it.getSuccessValue().let { value ->
                            card = value.card
                            nonce = value.nonce
                        }
                    }
                    resultListener?.onSuccess(it.isSuccess(), it.isCanceled(), card, nonce)
                }
            }
        }
    }
}
