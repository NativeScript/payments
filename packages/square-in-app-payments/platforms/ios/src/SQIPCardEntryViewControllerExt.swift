import SquareInAppPaymentsSDK
extension SQIPCardEntryViewController {
  private struct ExtraProps {
        static var nscPreviousCard: UInt8 = 0
    }
  
  public var nscPreviousCard: SQIPCardDetails? {
         get {
             return objc_getAssociatedObject(self, &ExtraProps.nscPreviousCard) as? SQIPCardDetails
         }
         set{
             if let unwrappedValue = newValue{
                 objc_setAssociatedObject(self, &ExtraProps.nscPreviousCard, unwrappedValue as SQIPCardDetails?, .OBJC_ASSOCIATION_RETAIN_NONATOMIC)
             }
         }
     }
    
}


@objcMembers
@objc(NSCSQIPCardEntryViewController)
public class NSCSQIPCardEntryViewController: SQIPCardEntryViewController, SQIPCardEntryViewControllerDelegate {
  public var onResponse: ((SQIPCardDetails?, @escaping (String?) -> Void) -> Void)?
  public var onComplete: ((Bool,SQIPCardDetails?) -> Void)?
  
  
  public override init(theme: SQIPTheme, isGiftCard: Bool) {
    super.init(theme: theme, isGiftCard: isGiftCard)
    self.delegate = self
  }

  public func cardEntryViewController(_ cardEntryViewController: SQIPCardEntryViewController, didObtain cardDetails: SQIPCardDetails, completionHandler: @escaping ((any Error)?) -> Void) {
    nscPreviousCard = cardDetails
    onResponse?(cardDetails) { errorMessage in
      if(errorMessage != nil){
        let error = NSError(domain: "com.nativescript.square", code: 0, userInfo: [NSLocalizedDescriptionKey:errorMessage!])
        completionHandler(error)
      }else {
        completionHandler(nil)
      }
    }
  }

  
  public func cardEntryViewController(_ cardEntryViewController: SQIPCardEntryViewController, didCompleteWith status: SQIPCardEntryCompletionStatus) {
    switch(status){
    case .canceled:
      onComplete?(true, nil)
    case .success:
      onComplete?(false, nscPreviousCard)
    }
  }
}
