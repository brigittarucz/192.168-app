import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	constructor(private authService: AuthService) {}

	ngOnInit(): void {}

	changeAuthStatus() {
		event.preventDefault();
		// If it validates
		this.authService.changeAuthStatus();
	}

	changeGuestStatus() {
		this.authService.changeGuestStatus();
	}
}
