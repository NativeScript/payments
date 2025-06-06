import { EventData, Page, Utils } from '@nativescript/core';
import { MainViewModel } from './main-view-model';

export function navigatedTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new MainViewModel();

  if (__APPLE__) {
    Utils.ios.setWindowBackgroundColor('#000');
  }
}
