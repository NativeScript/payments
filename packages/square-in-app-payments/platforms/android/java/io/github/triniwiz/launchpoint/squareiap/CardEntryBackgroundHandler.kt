package io.github.triniwiz.launchpoint.squareiap

import sqip.CardDetails
import sqip.CardEntryActivityCommand
import java.util.concurrent.CountDownLatch
import java.util.concurrent.Executors

class CardEntryBackgroundHandler : sqip.CardNonceBackgroundHandler {
    private var lock = CountDownLatch(1)

    interface OnComplete {
        fun onSuccess()
        fun onError(message: String)
    }

    interface Callback {
        fun response(cardDetails: CardDetails, onComplete: OnComplete)
    }

    var onResponse: Callback? = null

    companion object {
        @JvmStatic
        val shared: CardEntryBackgroundHandler by lazy {
            CardEntryBackgroundHandler()
        }
    }

    private var executor = Executors.newSingleThreadExecutor()
    override fun handleEnteredCardInBackground(cardDetails: CardDetails): CardEntryActivityCommand {
        var res: CardEntryActivityCommand? = null
        executor.execute {
            onResponse?.response(cardDetails, object : OnComplete {
                override fun onSuccess() {
                    res = CardEntryActivityCommand.Finish()
                    lock.countDown()
                    lock = CountDownLatch(1)
                }

                override fun onError(message: String) {
                    res = CardEntryActivityCommand.ShowError(message)
                    lock.countDown()
                    lock = CountDownLatch(1)
                }
            })
        }
        lock.await()
        return res!!
    }
}
