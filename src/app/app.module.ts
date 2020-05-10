import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgeCheckComponent } from './components/views/age-check/age-check.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationComponent } from './components/views/authentication/authentication.component';
import { LoginComponent } from './components/views/authentication/login/login.component';
import { SignupComponent } from './components/views/authentication/signup/signup.component';
import { TourComponent } from './components/views/tour/tour.component';
import { NavbarComponent } from './components/ui-components/navbar/navbar.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
// Hammer library import

import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { SidebarComponent } from './components/ui-components/sidebar/sidebar.component';
import { CommunityGeneralComponent } from './components/views/dashboard/community-general/community-general.component';
import { CommunityReferralComponent } from './components/views/dashboard/community-referral/community-referral.component';
import { ShopProductsComponent } from './components/views/dashboard/shop-products/shop-products.component';
import { ShopSpecialsComponent } from './components/views/dashboard/shop-specials/shop-specials.component';
import { CartViewComponent } from './components/views/dashboard/cart-view/cart-view.component';
import { CartCheckoutComponent } from './components/views/dashboard/cart-checkout/cart-checkout.component';

export class MyHammerConfig extends HammerGestureConfig {
	overrides = <any>{
		swipe: { direction: Hammer.DIRECTION_ALL }
	};
}

@NgModule({
	declarations: [
		AppComponent,
		AgeCheckComponent,
		AuthenticationComponent,
		LoginComponent,
		SignupComponent,
		TourComponent,
		NavbarComponent,
		DashboardComponent,
		SidebarComponent,
		CommunityGeneralComponent,
		CommunityReferralComponent,
		ShopProductsComponent,
		ShopSpecialsComponent,
		CartViewComponent,
		CartCheckoutComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatSelectModule,
		HammerModule,
		MatCheckboxModule
	],
	providers: [
		{
			provide: HAMMER_GESTURE_CONFIG,
			useClass: MyHammerConfig
		}
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
