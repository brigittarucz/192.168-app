import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-community-general',
	templateUrl: './community-general.component.html',
	styleUrls: [ './community-general.component.scss' ]
})
export class CommunityGeneralComponent implements OnInit {
	isGuestActive: boolean = false;
	discount10: number = 0;
	discount5: number = 0;
	discount2: number = 0;
	sum: number = 0;

	constructor() {}

	ngOnInit(): void {
		if (localStorage.getItem('user') === 'guest') {
			this.isGuestActive = true;
		}
		if (localStorage.getItem('user-object') !== null) {
			let user = JSON.parse(localStorage.getItem('user-object'));
			this.discount10 = user.discount10;
			this.discount5 = user.discount5;
			this.discount2 = user.discount2;
			this.sum = this.discount10 + this.discount5 + this.discount2;
		}
	}
}
