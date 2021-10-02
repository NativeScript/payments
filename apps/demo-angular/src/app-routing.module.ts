import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
	{ path: 'apple-pay', loadChildren: () => import('./plugin-demos/apple-pay.module').then(m => m.ApplePayModule) },
	{ path: 'google-pay', loadChildren: () => import('./plugin-demos/google-pay.module').then(m => m.GooglePayModule) },
	{ path: 'payments', loadChildren: () => import('./plugin-demos/payments.module').then(m => m.PaymentsModule) }
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
