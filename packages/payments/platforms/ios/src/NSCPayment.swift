//
//  NSCPayments.swift
//  @nativescript/payments
//
//  Created by Osei Fortune on 09/08/2025.
//  Copyright © 2025 NativeScript. All rights reserved.
//
import UIKit
import StoreKit


@objc(NSCPaymentsStoreKitVersion)
public enum NSCPaymentsStoreKitVersion: Int32, RawRepresentable {
  case v1
  case v2
  
  public typealias RawValue = Int32
  
  public init?(rawValue: Int32) {
    switch rawValue {
    case 0:
      self = .v1
      break
    case 1:
      self = .v2
    default:
      return nil
    }
  }
  
  public var rawValue: Int32 {
    switch self {case .v1:
      return 0
    case .v2:
      return 1
    }
  }
  
  var storeKit2Available: Bool {
    if #available(iOS 15.0, macOS 12.0, tvOS 15.0, watchOS 8.0, *) {
      return true
    }
    return false
  }
  
}


@objc(NSCTransactionState)
public enum NSCTransactionState: Int32, RawRepresentable {
  case unknown
  case purchased
  case pending
  
  public typealias RawValue = Int32
  
  public init?(rawValue: Int32) {
    switch rawValue {
    case -1:
      self = .unknown
      break
    case 1:
      self = .purchased
    case 2:
      self = .pending
    default:
      return nil
    }
  }
  
  public var rawValue: Int32 {
    switch self {
    case .unknown:
      return -1
    case .purchased:
      return 1
    case .pending:
      return 2
    }
  }
}

@objc(NSCTransaction)
@objcMembers
public class NSCTransaction: NSObject {
  public let version: NSCPaymentsStoreKitVersion
  internal var transaction: Any
  init(transaction: Any, _ version : NSCPaymentsStoreKitVersion) {
    self.version = version
    self.transaction = transaction
  }
  
  public var orderId: String? {
    if #available(iOS 15.0, macOS 12.0, tvOS 15.0, watchOS 8.0, *) {
      return "\(v2!.id)"
    }
    return v1!.transactionIdentifier
  }
  
  public var productId: String {
    if #available(iOS 15.0, macOS 12.0, tvOS 15.0, watchOS 8.0, *) {
      return v2!.productID
    }
    return v1!.payment.productIdentifier
  }
  
  public var orderDate: Date? {
    if #available(iOS 15.0, macOS 12.0, tvOS 15.0, watchOS 8.0, *) {
      return v2!.purchaseDate
    }
    return v1!.transactionDate
  }
  
  
  internal var errorValue: Error? = nil
  var error: Error? {
    get {
      switch(version){
      case .v1:
        return v1!.error
      case .v2:
        return errorValue
      }
    }
  }
  
  var state: NSCTransactionState {
    get {
      if(version == .v2 && version.storeKit2Available){
        if #available(iOS 15.0, *) {
          switch v2!.revocationReason {
          case .some:
            return .unknown
          default:
            return .purchased
          }
        } else {
          return .unknown
        }
      }
      
      switch(v1!.transactionState){
      case .purchasing:
        return .pending
      case .purchased:
        return .purchased
      case .failed:
        return .unknown
      case .restored:
        return .purchased
      case .deferred:
        return .pending
      }
      
    }
  }
  
  var receipt: String? {
    get {
      if version == .v2 && version.storeKit2Available {
        if #available(iOS 15.0, macOS 12.0, tvOS 15.0, watchOS 8.0, *) {
          return String(data:v2!.jsonRepresentation, encoding: .utf8)
        }
      }
      return nil
    }
  }
  
  @available(iOS 15.0, macOS 12.0, tvOS 15.0, watchOS 8.0, *)
  internal var v2: Transaction? {
    if version.storeKit2Available {
      return transaction as? Transaction
    }
    return nil
  }
  
  internal var v1: SKPaymentTransaction? {
    if version == .v1 {
      return transaction as? SKPaymentTransaction
    }
    return nil
  }
  
  public func finish(_ callback: @escaping (NSCPaymentsResponse?) -> Void) {
    if version == .v2 && version.storeKit2Available {
      Task {
        if #available(iOS 15.0, macOS 12.0, tvOS 15.0, watchOS 8.0, *) {
          await v2!.finish()
          for await complete in Transaction.all {
            switch complete {
            case .unverified(let t, let error):
              if(t.id == v2!.id){
                self.errorValue = error
                callback(NSCPaymentsResponse(code: .Error, message: "Usage error: \(error.localizedDescription)", resolution: ""))
                break
              }
              break
            case .verified(let t):
              if(t.id == v2!.id){
                self.transaction = transaction
                callback(nil)
                break
              }
            }
          }
        }
      }
    } else {
      SKPaymentQueue.default().finishTransaction(v1!)
    }
  }
}

@objc(NSCProduct)
@objcMembers
public class NSCProduct: NSObject {
  public let version: NSCPaymentsStoreKitVersion
  internal let product: Any
  init(product: Any, _ version : NSCPaymentsStoreKitVersion) {
    self.product = product
    self.version = version
  }
  
  public var receiptToken: String? {
    if let url = Bundle.main.appStoreReceiptURL {
      do {
        return try Data(contentsOf: url).base64EncodedString()
      }catch {
        return nil
      }
    }
    return nil
  }
  
  @available(iOS 15.0, macOS 12.0, tvOS 15.0, watchOS 8.0, *)
  internal var v2: Product? {
    if version.storeKit2Available {
      return product as? Product
    }
    return nil
  }
  
  internal var v1: SKProduct? {
    if version == .v1 {
      return product as? SKProduct
    }
    return nil
  }
  
  public var type: String {
    if #available(iOS 15.0, macOS 12.0, tvOS 15.0, watchOS 8.0, *) {
      switch(v2!.type){
      case .autoRenewable, .nonRenewable:
        return "sub"
      default:
        return "inapp"
      }
    }
    
    if #available(iOS 11.2, macOS 10.13.2, tvOS 11.2, watchOS 6.2, *){
      if(v1?.subscriptionPeriod != nil){
        return "sub"
      }else {
        return "inapp"
      }
    }
    
    return "inapp"
  }
  
  
  public var productIdentifier: String {
    return id
  }
  
  public var id: String {
    if #available(iOS 15.0, macOS 12.0, tvOS 15.0, watchOS 8.0, *) {
      return v2!.id
    }
    return v1!.productIdentifier
  }
  
  public override var description: String {
    if #available(iOS 15.0, macOS 12.0, tvOS 15.0, watchOS 8.0, *) {
      return v2!.description
    }
    return v1!.localizedDescription
  }
  
  public var displayName: String {
    if #available(iOS 15.0, macOS 12.0, tvOS 15.0, watchOS 8.0, *) {
      return v2!.displayName
    }
    return v1!.localizedTitle
  }
  
  public var price: Double {
    if #available(iOS 15.0, macOS 12.0, tvOS 15.0, watchOS 8.0, *) {
      return NSDecimalNumber(decimal: v2!.price).doubleValue
    }
    return v1!.price.doubleValue
  }
  
  public var isFamilyShareable: Bool {
    if #available(iOS 15.0, macOS 12.0, tvOS 15.0, watchOS 8.0, *) {
      return v2!.isFamilyShareable
    }
    if #available(iOS 14.0, macOS 11.0, tvOS 14.0, watchOS 7.0, *) {
      return v1!.isFamilyShareable
    } else {
      return false
    }
  }
  
  public var priceCurrencyCode: String? {
    if #available(iOS 15.0, macOS 12.0, tvOS 15.0, watchOS 8.0, *) {
      return v2!.priceFormatStyle.currencyCode
    }
    return v1!.priceLocale.currencyCode
  }
  
  public var priceFormatted: String? {
    if #available(iOS 15.0, macOS 12.0, tvOS 15.0, watchOS 8.0, *) {
      return v2!.displayPrice
    }
    let formatter = NumberFormatter()
    formatter.numberStyle = .currency
    formatter.locale = v1!.priceLocale
    return formatter.string(from: v1!.price)
  }
}

@objc(NSCPaymentsResponseFailure)
public enum NSCPaymentsResponseFailure: Int32, RawRepresentable {
  case ProductUnavailable
  case DeveloperUsage
  case ProductAlreadyOwned
  case ProductNotOwned
  case UserCancelled
  case NetworkAvailability
  case BillingAvailability
  case Unspecified
  case PurchaseNotAllowed
  case DeferredPayment
  case Error
  public typealias RawValue = Int32
  
  public init?(rawValue: Int32) {
    switch rawValue {
    case 0:
      self = .ProductUnavailable
      break
    case 1:
      self = .DeveloperUsage
      break
    case 2:
      self = .ProductAlreadyOwned
      break
    case 3:
      self = .ProductNotOwned
      break
    case 4:
      self = .UserCancelled
      break
    case 5:
      self = .NetworkAvailability
      break
    case 6:
      self = .BillingAvailability
      break
    case 7:
      self = .Unspecified
      break
    case 8:
      self = .PurchaseNotAllowed
      break
    case 9:
      self = .DeferredPayment
      break
    case 10:
      self = .Error
      break
    default:
      return nil
    }
  }
  
  public var rawValue: Int32 {
    switch self {
    case .ProductUnavailable:
      return 0
    case .DeveloperUsage:
      return 1
    case .ProductAlreadyOwned:
      return 2
    case .ProductNotOwned:
      return 3
    case .UserCancelled:
      return 4
    case .NetworkAvailability:
      return 5
    case .BillingAvailability:
      return 6
    case .Unspecified:
      return 7
    case .PurchaseNotAllowed:
      return 8
    case .DeferredPayment:
      return 9
    case .Error:
      return 10
    }
  }
}

@objc(NSCPaymentsResponse)
@objcMembers
public class NSCPaymentsResponse: NSObject {
  public let code: NSCPaymentsResponseFailure
  public let message: String
  public let resolution: String
  
  public init(
    code: NSCPaymentsResponseFailure,
    message: String,
    resolution: String
  ){
    self.code = code
    self.message = message
    self.resolution = resolution
  }
}

@objc(NSCPayments)
@objcMembers
public class NSCPayments: NSObject {
  internal var updatesListener: AnyObject?
  internal var pendingTasks: [AnyObject] = []
  public let version: NSCPaymentsStoreKitVersion
  public var transactionUpdateListener: ((NSCTransaction) -> Void)?
  internal var isRestoring = false
  internal var fetchingPurchases: [([NSCTransaction]?, NSCPaymentsResponse?) -> Void] = []
  internal var previousPurcahses: [NSCTransaction] = []
  public override init() {
    if #available(iOS 15.0, macOS 12.0, tvOS 15.0, watchOS 8.0, *) {
      version = .v2
      super.init()
      updatesListener = Task(priority: .background) {
        for await transaction in Transaction.updates {
          switch transaction {
          case .unverified(let transaction, let error):
            let ret = NSCTransaction(transaction: transaction, .v2)
            ret.errorValue = error
            transactionUpdateListener?(ret)
            break
          case .verified(let transaction):
            transactionUpdateListener?(NSCTransaction(transaction: transaction, .v2))
            break
          }
        }
      } as AnyObject
    }else {
      version = .v1
      super.init()
      let instance: SKPaymentTransactionObserver = {
        class TransactionObserver: NSObject, SKPaymentTransactionObserver {
          var payments: NSCPayments
          
          init(payments instance : NSCPayments) {
            payments = instance
            super.init()
          }
          
          func paymentQueue(_ queue: SKPaymentQueue, updatedTransactions transactions: [SKPaymentTransaction]) {
            if(payments.isRestoring){
              for transaction in transactions where transaction.transactionState == .restored {
                payments.previousPurcahses.append(NSCTransaction(transaction: transaction, .v1))
              }
            }else {
              for transaction in transactions {
                payments.transactionUpdateListener?(NSCTransaction(transaction: transaction, .v1))
              }
            }
          }
          
          func paymentQueue(_ queue: SKPaymentQueue, removedTransactions transactions: [SKPaymentTransaction]) {
            
          }
          
          func paymentQueue(_ queue: SKPaymentQueue, restoreCompletedTransactionsFailedWithError error: Error) {
            if(payments.isRestoring){
              for callback in payments.fetchingPurchases {
                callback(nil,NSCPaymentsResponse(code: .Error, message: "Usage error: \(error.localizedDescription)", resolution: ""))
              }
            }
          }
          
          func paymentQueueRestoreCompletedTransactionsFinished(_ queue: SKPaymentQueue) {
            if(payments.isRestoring){
              for callback in payments.fetchingPurchases {
                callback(payments.previousPurcahses, nil)
              }
              
              payments.fetchingPurchases.removeAll()
              payments.previousPurcahses.removeAll()
              payments.isRestoring = false
            }
          }
          
          func paymentQueue(shouldAddStorePayment payment: SKPayment, forTransaction transaction: SKPaymentTransaction) -> Bool {
            return true
          }
        }
        return TransactionObserver(payments: self)
      }()
      SKPaymentQueue.default().add(instance)
      updatesListener = instance
    }
    
  }
  
  deinit {
    switch(version){
    case .v1:
      SKPaymentQueue.default().remove(self.updatesListener as! SKPaymentTransactionObserver)
      break
    case .v2:
      if let listener =  updatesListener as? Task<Void, Never> {
        listener.cancel()
      }
      break
    }
  }
  
  public func canMakePayments() -> Bool {
    return NSCPayments.isSupported()
  }
  
  public func fetchProducts(_ identifiers: [String], _ callback: @escaping ([NSCProduct], Error?) -> Void) {
    switch(version){
    case .v1:
      let request = SKProductsRequest(productIdentifiers: Set(identifiers))
      
      let delegate: SKProductsRequestDelegate =  {
        class SKProductsRequestDelegateImpl: NSObject, SKProductsRequestDelegate {
          let callback: ([NSCProduct], Error?) -> Void
          let version: NSCPaymentsStoreKitVersion
          init(_ cb: @escaping ([NSCProduct], Error?) -> Void, _ storeVerion: NSCPaymentsStoreKitVersion){
            version = storeVerion
            callback = cb
            super .init()
            
          }
          
          func productsRequest(_ request: SKProductsRequest, didReceive response: SKProductsResponse) {
            let products = response.products.map {NSCProduct(product: $0, version)}
            callback( products, nil)
          }
          
          func request(_ request: SKRequest, didFailWithError error: Error) {
            callback([], error)
          }
        }
        return SKProductsRequestDelegateImpl(callback, version)
      }()
      
      request.delegate = delegate
      request.start()
      
      break
    case .v2:
      if #available(iOS 15.0, macOS 12.0, tvOS 15.0, watchOS 8.0, *) {
        Task {
          do {
            
            let products = try await Product.products(for: Set(identifiers))
            let ret = products.map {NSCProduct(product: $0, version)}
            callback(ret,nil)
          }catch {
            callback([], error)
          }
        }
      }
      break
    }
  }
  
  public func purchaseProduct(_ product: NSCProduct, _ confirmIn: UIViewController, _ callback: @escaping (NSCPaymentsResponse?)->Void){
    switch(version){
    case .v1:
      let payment = SKPayment(product: product.v1!)
      SKPaymentQueue.default().add(payment)
      break
    case .v2:
      Task {
        do {
          if #available(iOS 15.0, macOS 12.0, tvOS 15.0, watchOS 8.0, *) {
            var result: Product.PurchaseResult
            if #available(iOS 18.2, *) {
              if let scene = await confirmIn.view.window?.windowScene {
                result = try await product.v2!.purchase(confirmIn: scene)
              }else {
                result = try await product.v2!.purchase()
              }
            }else {
              result = try await product.v2!.purchase()
            }
            
            switch result {
            case .success(let success):
              switch(success){
              case .unverified(_, let verificationError):
                callback(
                  NSCPaymentsResponse(code: .Error, message: "Usage error: \(verificationError.localizedDescription)", resolution: "")
                )
                break
              case .verified(let transaction):
                transactionUpdateListener?(NSCTransaction(transaction: transaction, .v2))
                callback(nil)
                break
              }
            case .userCancelled:
              callback(NSCPaymentsResponse(code: .UserCancelled, message: "Indicates that the user cancelled a payment request.", resolution: ""))
              break
            case .pending:
              callback(NSCPaymentsResponse(code: .DeferredPayment, message: "Indicated that is in the queue, but its final status is pending external action such as Ask to Buy.", resolution: ""))
              break
              
            }
            
          }
        }catch {
          callback(
            NSCPaymentsResponse(code: .Error, message: "Usage error: \(error.localizedDescription)", resolution: "")
          )
        }
      }
      break
    }
  }
  
  
  // return error + transaction ?
  public func fetchPurchases(_ callback: @escaping ([NSCTransaction]?, NSCPaymentsResponse?) -> Void){
    if(version == .v2 && version.storeKit2Available){
      if #available(iOS 15.0, macOS 12.0, tvOS 15.0, watchOS 8.0, *){
        Task(priority: .background) {
          do {
            try await AppStore.sync()
            var purchases:  [NSCTransaction] = []
            var hasError: Bool = false
            for await transaction in Transaction.currentEntitlements {
              switch transaction {
              case .unverified(_, let error):
                callback(nil,NSCPaymentsResponse(code: .Error, message: "Usage error: \(error.localizedDescription)", resolution: ""))
                hasError = true
                return
              case .verified(let transaction):
                purchases.append(NSCTransaction(transaction: transaction, .v2))
                break
              }
            }
            
            if(!hasError){
              callback(purchases, nil)
            }
            
          }catch {
            callback(nil, NSCPaymentsResponse(code: .Error, message: "Usage error: \(error.localizedDescription)", resolution: "")
            )
          }
        }
      }
    }else {
      if(isRestoring){
        fetchingPurchases.append(callback)
        return
      }
      SKPaymentQueue.default().restoreCompletedTransactions()
    }
  }
  
  public static func isSupported() -> Bool {
    if #available(iOS 15.0, macOS 12.0, tvOS 15.0, watchOS 8.0, *) {
      return AppStore.canMakePayments
    }else {
      return SKPaymentQueue.canMakePayments()
    }
  }
}
