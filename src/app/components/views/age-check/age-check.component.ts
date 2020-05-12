import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-age-check',
	templateUrl: './age-check.component.html',
	styleUrls: [ './age-check.component.scss' ]
})
export class AgeCheckComponent implements OnInit {
	yearsArr: number[] = [];
	constructor(private authService: AuthService) {}

	ngOnInit(): void {
		for (let i = 2002; i > 1919; i--) {
			this.yearsArr.push(i);
		}
	}

	setMinorStatus() {
		this.authService.changeMinorStatus();
	}
}
