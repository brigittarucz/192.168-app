import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-tour',
	templateUrl: './tour.component.html',
	styleUrls: [ './tour.component.scss' ]
})
export class TourComponent implements OnInit {
	tours: string[] = [ 'layout-tour-1', 'layout-tour-2', 'layout-tour-3' ];
	toursSwipedLeft: string;
	toursSwipedRight: string;
	toursSwipedUp: string;

	constructor(private router: Router) {}

	ngOnInit(): void {}

	onSwipeLeft(ev) {
		if (ev.target.classList[1] !== undefined) {
			if (ev.target.classList[1].includes('tour')) {
				let num = ev.target.classList[1].charAt(5);
				if (num !== '3') {
					console.log(num);
					this.toursSwipedRight = '0';
					this.toursSwipedLeft = this.tours[num];
				}
			}
		}
	}

	onSwipeRight(ev) {
		if (ev.target.classList[1] !== undefined) {
			if (ev.target.classList[1].includes('tour')) {
				let num = ev.target.classList[1].charAt(5);
				if (num !== '1') {
					this.toursSwipedLeft = '0';
					this.toursSwipedRight = this.tours[num - 1];
					console.log(this.toursSwipedRight);
				}
			}
		}
	}

	onSwipeUp(ev) {
		this.toursSwipedUp = ev.target.classList[2];
		console.log(this.toursSwipedUp);
		this.toursSwipedLeft = '0';
		this.toursSwipedRight = '0';
		setTimeout(() => {
			this.router.navigate([ 'dashboard/' + this.toursSwipedUp ]);
		}, 500);
	}
}
