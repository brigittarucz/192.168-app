import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-enhance-device',
	templateUrl: './enhance-device.component.html',
	styleUrls: [ './enhance-device.component.scss' ]
})
export class EnhanceDeviceComponent implements OnInit {
	isGuestActive: boolean = false;
	constructor() {}

	ngOnInit(): void {
		if (localStorage.getItem('user') === 'guest') {
			this.isGuestActive = true;
		}
	}
}
