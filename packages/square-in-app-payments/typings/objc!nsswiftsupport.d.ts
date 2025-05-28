declare class NSCSQIPCardEntryViewController extends SQIPCardEntryViewController implements SQIPCardEntryViewControllerDelegate {
  static alloc(): NSCSQIPCardEntryViewController; // inherited from NSObject

  static new(): NSCSQIPCardEntryViewController; // inherited from NSObject

  onComplete: (p1: boolean, p2: SQIPCardDetails) => void;

  onResponse: (p1: SQIPCardDetails, p2: (p1: string) => void) => void;

  cardEntryViewControllerDidCompleteWithStatus(cardEntryViewController: SQIPCardEntryViewController, status: SQIPCardEntryCompletionStatus): void;

  cardEntryViewControllerDidObtainCardDetailsCompletionHandler(cardEntryViewController: SQIPCardEntryViewController, cardDetails: SQIPCardDetails, completionHandler: (p1: NSError) => void): void;
}
