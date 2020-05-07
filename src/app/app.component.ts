import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	userInAppSubject: Subject<boolean>;

	constructor(private authService: AuthService) {
		this.userInAppSubject = this.authService.userAuth;
		this.userInAppSubject.subscribe((value) => {
			this.isUserInApp = value;
			console.log(this.isUserInApp);
		});
	}
	isUserNotMinor: boolean = true;
	isUserInApp: boolean = true;
}
