import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {
	isSidebarOpen: boolean = false;

	userNavigationSelected = 'general';

	userNavigation = { parent: 'community', children: [ 'general', 'referral' ] };

	navigationTree = [
		{ parent: 'community', children: [ 'general', 'referral' ] },
		{ parent: 'shop', children: [ 'products', 'special-offers' ] },
		{ parent: 'enhance', children: [ 'my-iqos', 'customize' ] },
		{ parent: 'shopping cart', children: [ 'view', 'checkout' ] }
	];

	constructor(private router: Router) {}

	closeSidebar(clicked) {
		this.isSidebarOpen = false;
		this.navigationTree.forEach((el) => {
			el.children.forEach((child) => {
				if (child === clicked) {
					this.router.navigate([ 'dashboard/' + child ]);
					this.userNavigationSelected = child;
					this.userNavigation = el;
				}
			});
		});
	}

	navigateToCart() {
		this.userNavigationSelected = 'view';
		this.userNavigation = this.navigationTree[3];
	}

	toggleSidebar() {
		this.isSidebarOpen = !this.isSidebarOpen;
	}

	modifySelected(ev) {
		let newSelection = ev.target.textContent;
		newSelection = newSelection.toLowerCase();
		newSelection = newSelection.trim();
		this.userNavigationSelected = newSelection;
	}

	ngOnInit(): void {}
}
