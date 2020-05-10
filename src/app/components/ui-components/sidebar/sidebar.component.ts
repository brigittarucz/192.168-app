import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: [ './sidebar.component.scss' ]
})
export class SidebarComponent implements OnInit {
	@Output() close = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	closeSidebar(ev) {
		this.close.emit(ev.target.classList[1]);
	}
}
