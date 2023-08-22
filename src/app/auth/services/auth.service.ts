import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';
import { PersistenceService } from 'src/app/shared/services/persistence.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
	constructor(private persistenceService: PersistenceService, private route: Router) {}

	register(user: RegisterRequestInterface): void {
		this.persistenceService.set('isLoggedIn', true);
		this.persistenceService.set('user', user);
		this.route.navigateByUrl('/');
	}

	login(user: LoginRequestInterface): string {
		const currentUser = this.persistenceService.get('user');
		if (currentUser) {
			if (user.email === currentUser.email && user.password === currentUser.password) {
				this.persistenceService.set('isLoggedIn', true);
				this.route.navigateByUrl('/');
				return 'Logged';
			}
			return 'Error';
		}
		return 'Error';
	}
}
