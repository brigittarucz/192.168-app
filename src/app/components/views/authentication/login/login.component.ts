import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	isLoading: boolean = false;
	errorEmail: boolean = false;

	constructor(private authService: AuthService, private http: HttpClient, private router: Router) {}

	ngOnInit(): void {}

	changeGuestStatus() {
		this.authService.changeGuestStatus();
		localStorage.setItem('user', 'guest');
	}

	onSubmit(form: NgForm) {
		this.isLoading = true;
		this.http
			.get('https://iqos-f5c13.firebaseio.com/users.json')
			.pipe(
				map((response) => {
					const usersArray = [];
					for (const key in response) {
						if (response.hasOwnProperty(key)) {
							usersArray.push({ ...response[key], id: key });
						}
					}
					return usersArray;
				})
			)
			.subscribe((users) => {
				for (let user of users) {
					if (user.email === form.value.email) {
						this.isLoading = false;
						this.errorEmail = false;
						this.authService.changeAuthStatus();
						console.log(this.authService.isUserAuth);
						localStorage.setItem('user', 'authenticated');
						localStorage.setItem('user-object', JSON.stringify(user));
						this.router.navigate([ 'dashboard/general' ]);
						break;
					}
				}
				this.isLoading = false;
				this.errorEmail = true;
			});
	}
}
