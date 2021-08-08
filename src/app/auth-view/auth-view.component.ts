import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
	selector: 'app-auth-view',
	templateUrl: './auth-view.component.html',
	styleUrls: ['./auth-view.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthViewComponent implements OnInit {

	favouriteApplicationName: string = '';
	error: string = '';

	constructor(
		private readonly authService: AuthService,
		private readonly router: Router,
	) {
	}

	ngOnInit() {
		if (this.authService.isAuthorized()) {
			this.navigateToVideo();
		}
	}

	public setFavouriteApplicationName() {
		this.authService.setSecret(this.favouriteApplicationName);
		if (this.authService.isAuthorized()) {
			this.navigateToVideo();
		} else {
			this.error = 'Sorry, you are not allowed to use it';
		}
	}

	private navigateToVideo() {
		this.router.navigate(['video']);
	}

}
