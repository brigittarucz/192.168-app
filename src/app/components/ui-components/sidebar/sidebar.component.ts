import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: [ './sidebar.component.scss' ]
})
export class SidebarComponent implements OnInit {
	@Output() close = new EventEmitter();

	username: string = 'Mock User';
	isGuestActive: boolean = false;

	constructor(private router: Router) {}

	ngOnInit(): void {
		if (localStorage.getItem('user') === 'guest') {
			this.isGuestActive = true;
		} else if (localStorage.getItem('user') === null) {
			window.alert('Confirm Form Resubmission');
			this.router.navigate([ '/' ]);
		}
		if (localStorage.getItem('user-object') !== null) {
			let user = JSON.parse(localStorage.getItem('user-object'));
			this.username = user.name;
		}
	}

	closeSidebar(ev) {
		this.close.emit(ev.target.classList[1]);
	}
}
