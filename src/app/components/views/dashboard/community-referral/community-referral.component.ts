import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-community-referral',
	templateUrl: './community-referral.component.html',
	styleUrls: [ './community-referral.component.scss' ]
})
export class CommunityReferralComponent implements OnInit {
	isGuestActive: boolean = false;
	showMore: boolean = false;
	constructor() {}

	ngOnInit(): void {
		if (localStorage.getItem('user') === 'guest') {
			this.isGuestActive = true;
		}
	}

	showMoreFc() {
		this.showMore = !this.showMore;
	}
}
