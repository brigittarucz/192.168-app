import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
	skipTour: boolean = true;

	constructor(private http: HttpClient, private router: Router) {}

	ngOnInit(): void {
		// let key = localStorage.getItem('key');
		// this.http.get('https://iqos-f5c13.firebaseio.com/users/' + key + '.json').subscribe(
		// 	(response) => {
		// 		localStorage.setItem('user-object', JSON.stringify(response));
		// 	},
		// 	(error) => {
		// 		alert('Authentication Error');
		// 		localStorage.removeItem('key');
		// 		localStorage.removeItem('user');
		// 		this.router.navigate([ '/' ]);
		// 	}
		// );
	}
}
