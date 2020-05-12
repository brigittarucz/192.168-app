import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	isUserMinor: boolean = true;
	userMinorStatus: Subject<boolean> = new Subject<boolean>();

	isUserAuth: boolean = false;
	userAuthStatus: Subject<boolean> = new Subject<boolean>();

	isUserGuest: boolean = false;
	userGuestStatus: Subject<boolean> = new Subject<boolean>();

	constructor() {
		this.userAuthStatus.subscribe((value) => {
			this.isUserAuth = value;
		});
		this.userGuestStatus.subscribe((value) => {
			this.isUserGuest = value;
		});
		this.userMinorStatus.subscribe((value) => {
			this.isUserMinor = value;
		});
	}

	changeMinorStatus() {
		this.userMinorStatus.next(!this.isUserMinor);
	}

	changeAuthStatus() {
		this.userAuthStatus.next(!this.isUserAuth);
	}

	changeGuestStatus() {
		this.userGuestStatus.next(!this.isUserGuest);
	}

	get userAuth(): Subject<boolean> {
		return this.userAuthStatus;
	}

	get userGuest(): Subject<boolean> {
		return this.userGuestStatus;
	}

	get userMinor(): Subject<boolean> {
		return this.userMinorStatus;
	}
}
