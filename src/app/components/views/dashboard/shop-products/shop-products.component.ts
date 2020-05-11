import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-shop-products',
	templateUrl: './shop-products.component.html',
	styleUrls: [ './shop-products.component.scss' ]
})
export class ShopProductsComponent implements OnInit {
	selectedCategory: string = 'devicesArray';
	filterClicked: string = 'all';
	devicesArray = [ 1, 2, 3 ];

	constructor() {}

	ngOnInit(): void {}

	changePreference(ev) {
		this.filterClicked = ev.target.classList[1];
	}
}
