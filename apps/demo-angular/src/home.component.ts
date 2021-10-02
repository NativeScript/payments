import { Component } from '@angular/core';

@Component({
	selector: 'demo-home',
	templateUrl: 'home.component.html',
})
export class HomeComponent {
	demos = [
	{
		name: 'apple-pay'
	},
	{
		name: 'google-pay'
	},
	{
		name: 'payments'
	}
];
}