import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgeCheckComponent } from './components/views/age-check/age-check.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationComponent } from './components/views/authentication/authentication.component';
import { LoginComponent } from './components/views/authentication/login/login.component';
import { SignupComponent } from './components/views/authentication/signup/signup.component';

@NgModule({
	declarations: [ AppComponent, AgeCheckComponent, AuthenticationComponent, LoginComponent, SignupComponent ],
	imports: [ BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatSelectModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
