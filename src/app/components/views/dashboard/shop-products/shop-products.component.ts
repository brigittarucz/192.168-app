import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalShopComponent } from 'src/app/components/ui-components/modal-shop/modal-shop.component';

@Component({
	selector: 'app-shop-products',
	templateUrl: './shop-products.component.html',
	styleUrls: [ './shop-products.component.scss' ]
})
export class ShopProductsComponent implements OnInit {
	filterClicked: string = 'all';
	products = [
		{
			name: 'iqos-3-duo_color-gold',
			displayName: 'IQOS 3 DUO Brilliant Gold',
			price: '699.00 kr',
			description: 'For real tobacco with less lingering smell.',
			type: 'devices'
		},
		{
			name: 'iqos-3-duo_color-velvet',
			displayName: 'IQOS 3 DUO Velvet Grey',
			price: '699.00 kr',
			description: 'For real tobacco with less lingering smell.',
			type: 'devices'
		},
		{
			name: 'iqos-3-multi_color-velvet',
			displayName: 'IQOS 3 DUO Multi Velvet Grey',
			price: '549.00 kr',
			description: 'Enjoy up to 10 tobacco sticks on a charge.',
			type: 'devices'
		},
		{
			name: 'heets-fresh_quantity-3',
			displayName: 'HEETS Fresh Collection',
			price: '105.00 kr',
			description: '3 packs of 20 tobacco sticks.',
			type: 'heets'
		},
		{
			name: 'heets-kelly_quantity-10',
			displayName: 'HEETS Kelly Bundle',
			price: '350.00 kr',
			description: '10 packs of 20 tobacco sticks.',
			type: 'heets'
		},
		{
			name: 'heets-tobacco_quantity-3',
			displayName: 'HEETS Tobacco Collection',
			price: '105.00 kr',
			description: '3 packs of 20 tobacco sticks.',
			type: 'heets'
		}
	];

	constructor(public matDialog: MatDialog) {}

	ngOnInit(): void {}

	changePreference(ev) {
		this.filterClicked = ev.target.classList[1];
	}

	addToCart(ev) {
		if (localStorage.getItem('products') === null) {
			localStorage.setItem('products', ev.target.classList[1] + ',');
		} else {
			let current = localStorage.getItem('products');
			current += ev.target.classList[1] + ',';
			localStorage.setItem('products', current);
		}

		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-shop';
		dialogConfig.width = '80%';
		dialogConfig.hasBackdrop = false;
		dialogConfig.data = ev.target;
		const modalDialog = this.matDialog.open(ModalShopComponent, dialogConfig);

		setTimeout(() => {
			modalDialog.close();
		}, 2500);
	}
}
