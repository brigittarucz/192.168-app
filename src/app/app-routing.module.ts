import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TourComponent } from './components/views/tour/tour.component';

const routes: Routes = [ { path: 'intro-tour', component: TourComponent } ];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
