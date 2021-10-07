import { Frame, Observable } from '@nativescript/core';

export class MainViewModel extends Observable {
	viewDemo(args) {
		Frame.topmost().navigate({
			moduleName: `plugin-demos/${args.object.text.toLowerCase()}`,
		});
	}
}
