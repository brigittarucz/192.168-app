import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TourComponent } from './components/views/tour/tour.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { AuthenticationComponent } from './components/views/authentication/authentication.component';

const routes: Routes = [
	{ path: '', component: AuthenticationComponent },
	{ path: 'intro-tour', component: TourComponent },
	{ path: 'dashboard', component: DashboardComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
