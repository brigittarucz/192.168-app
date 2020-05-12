import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: [ './signup.component.scss' ]
})
export class SignupComponent implements OnInit {
	isLoading: boolean = false;

	constructor(private router: Router) {}

	ngOnInit(): void {}

	onSubmit(form: NgForm) {
		this.isLoading = true;
		localStorage.setItem('user', 'new-user');
		setTimeout(() => {
			this.isLoading = false;
			this.router.navigate([ 'intro-tour' ]);
		}, 750);
	}
}
