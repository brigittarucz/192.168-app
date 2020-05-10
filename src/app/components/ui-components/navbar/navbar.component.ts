import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {
	isSidebarOpen: boolean = false;

	toggleSidebar() {
		this.isSidebarOpen = !this.isSidebarOpen;
	}

	constructor() {}

	closeSidebar(ev) {
		this.isSidebarOpen = false;
	}

	ngOnInit(): void {}
}
