import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
	userInAppSubject: Subject<boolean>;
	blockDeviceType: boolean = false;

	minorStatusSubject: Subject<boolean>;

	constructor(private authService: AuthService) {
		this.userInAppSubject = this.authService.userAuth;
		this.userInAppSubject.subscribe((value) => {
			this.isUserInApp = value;
			console.log(this.isUserInApp);
		});

		this.minorStatusSubject = this.authService.userMinor;
		this.minorStatusSubject.subscribe((value) => {
			this.isUserNotMinor = !value;
		});
	}

	isUserNotMinor: boolean = false;
	isUserInApp: boolean = true;

	ngOnInit(): void {
		if (window.innerWidth > 450) {
			this.blockDeviceType = true;
		} else {
			this.blockDeviceType = false;
		}
	}

	@HostListener('window:resize', [ '$event' ])
	onResize(event) {
		if (event.target.innerWidth > 450) {
			this.blockDeviceType = true;
		} else {
			this.blockDeviceType = false;
		}
	}
}
