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
import { CartViewComponent } from './components/views/dashboard/cart-view/cart-view.component';
import { EnhanceDeviceComponent } from './components/views/dashboard/enhance-device/enhance-device.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalCartComponent } from './components/ui-components/modal-cart/modal-cart.component';
import { MenuformatterPipe } from './pipes/menuformatter.pipe';
import { ModalShopComponent } from './components/ui-components/modal-shop/modal-shop.component';

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
		CartViewComponent,
		EnhanceDeviceComponent,
		ModalCartComponent,
		MenuformatterPipe,
		ModalShopComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatSelectModule,
		HammerModule,
		MatCheckboxModule,
		FormsModule,
		HttpClientModule,
		MatDialogModule
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
