import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-modal-cart',
	templateUrl: './modal-cart.component.html',
	styleUrls: [ './modal-cart.component.scss' ]
})
export class ModalCartComponent implements OnInit {
	itemName: string;
	folderName: string;
	constructor(@Inject(MAT_DIALOG_DATA) data, public matDialogRef: MatDialogRef<ModalCartComponent>) {
		this.itemName = data.classList[2];
		this.folderName = data.classList[3];
	}

	close() {
		this.matDialogRef.close('Yes');
	}

	ngOnInit(): void {}
}
