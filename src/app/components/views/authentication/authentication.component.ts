import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-authentication',
	templateUrl: './authentication.component.html',
	styleUrls: [ './authentication.component.scss' ]
})
export class AuthenticationComponent implements OnInit {
	isLoginActive: boolean = true;
	isSignupActive: boolean = false;

	constructor() {}

	ngOnInit(): void {
		if (localStorage.getItem('user') === 'guest') {
			this.isLoginActive = false;
			this.isSignupActive = true;
		}
		localStorage.removeItem('user');
		localStorage.removeItem('user-object');
	}

	displayLoginScreen() {
		this.isLoginActive = true;
		this.isSignupActive = false;
	}

	displaySignupScreen() {
		this.isLoginActive = false;
		this.isSignupActive = true;
	}
}
