import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalCartComponent } from 'src/app/components/ui-components/modal-cart/modal-cart.component';

@Component({
	selector: 'app-cart-view',
	templateUrl: './cart-view.component.html',
	styleUrls: [ './cart-view.component.scss' ]
})
export class CartViewComponent implements OnInit {
	products = [
		{
			name: 'iqos-3-duo_color-gold',
			displayName: 'IQOS 3 DUO Brilliant Gold',
			price: '699.00 kr',
			description: 'For real tobacco with less lingering smell.',
			type: 'devices',
			quantity: 0
		},
		{
			name: 'iqos-3-duo_color-velvet',
			displayName: 'IQOS 3 DUO Velvet Grey',
			price: '699.00 kr',
			description: 'For real tobacco with less lingering smell.',
			type: 'devices',
			quantity: 0
		},
		{
			name: 'iqos-3-multi_color-velvet',
			displayName: 'IQOS 3 DUO Multi Velvet Grey',
			price: '549.00 kr',
			description: 'Enjoy up to 10 tobacco sticks on a charge.',
			type: 'devices',
			quantity: 0
		},
		{
			name: 'heets-fresh_quantity-3',
			displayName: 'HEETS Fresh Collection',
			price: '105.00 kr',
			description: '3 packs of 20 tobacco sticks.',
			type: 'heets',
			quantity: 0
		},
		{
			name: 'heets-kelly_quantity-10',
			displayName: 'HEETS Kelly Bundle',
			price: '350.00 kr',
			description: '10 packs of 20 tobacco sticks.',
			type: 'heets',
			quantity: 0
		},
		{
			name: 'heets-tobacco_quantity-3',
			displayName: 'HEETS Tobacco Collection',
			price: '105.00 kr',
			description: '3 packs of 20 tobacco sticks.',
			type: 'heets',
			quantity: 0
		}
	];

	subtotal: number = 0;
	total: number = 0;

	constructor(public matDialog: MatDialog) {}

	ngOnInit(): void {
		if (localStorage.getItem('products') !== null) {
			let userProductsStringToArr = localStorage.getItem('products').split(',');
			userProductsStringToArr.forEach((str) => {
				this.products.forEach((product) => {
					if (str === product.name) {
						product.quantity += 1;
						let price = parseInt(product.price);
						this.subtotal += price;
						this.total += price;
					}
				});
			});
		}
	}

	showModal(ev) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-cart';
		dialogConfig.width = '80%';
		dialogConfig.data = ev.target;
		const modalDialog = this.matDialog.open(ModalCartComponent, dialogConfig);

		modalDialog.afterClosed().subscribe((data) => {
			if (data === 'Yes') {
				this.products.forEach((product) => {
					if (product.name === ev.target.classList[2]) {
						product.quantity -= 1;
						let productsStr = localStorage.getItem('products');
						productsStr = productsStr.replace(product.name + ',', '');
						localStorage.setItem('products', productsStr);
					}
				});
			}
		});
	}
}
