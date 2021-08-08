import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanLoad {

	constructor(
		private readonly authService: AuthService,
		private readonly router: Router,
	) {
	}

	canLoad(route: Route, segments: UrlSegment[]) {
		return this.authService.isAuthorized() ? true : this.router.createUrlTree(['']);
	}

}
