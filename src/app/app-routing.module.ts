import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TourComponent } from './components/views/tour/tour.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { AuthenticationComponent } from './components/views/authentication/authentication.component';
import { CommunityGeneralComponent } from './components/views/dashboard/community-general/community-general.component';
import { CommunityReferralComponent } from './components/views/dashboard/community-referral/community-referral.component';
import { ShopProductsComponent } from './components/views/dashboard/shop-products/shop-products.component';
import { CartViewComponent } from './components/views/dashboard/cart-view/cart-view.component';
import { EnhanceDeviceComponent } from './components/views/dashboard/enhance-device/enhance-device.component';

const routes: Routes = [
	{ path: '', component: AuthenticationComponent },
	{ path: 'intro-tour', component: TourComponent },
	{
		path: 'dashboard',
		component: DashboardComponent,
		children: [
			{ path: '', redirectTo: 'general', pathMatch: 'full' },
			{ path: 'general', component: CommunityGeneralComponent },
			{ path: 'referral', component: CommunityReferralComponent },
			{ path: 'shop', component: ShopProductsComponent },
			{ path: 'view-cart', component: CartViewComponent },
			{ path: 'enhance-device', component: EnhanceDeviceComponent }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
