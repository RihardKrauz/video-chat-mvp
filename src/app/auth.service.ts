import { Injectable } from '@angular/core';

const secret = 'climedo';

const LocalStorageKeys = {
	SECRET: 'secret',
}

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	getSecret() {
		return localStorage.getItem(LocalStorageKeys.SECRET);
	}

	setSecret(value: string) {
		localStorage.setItem(LocalStorageKeys.SECRET, value);
	}

	isAuthorized() {
		return this.getSecret() === secret;
	}
}
