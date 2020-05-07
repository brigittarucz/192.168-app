import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TourComponent } from './components/views/tour/tour.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';

const routes: Routes = [
	{ path: 'intro-tour', component: TourComponent },
	{ path: 'dashboard', component: DashboardComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
