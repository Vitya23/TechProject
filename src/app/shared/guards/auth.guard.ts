import { PersistenceService } from 'src/app/shared/services/persistence.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard {
	constructor(private auth: PersistenceService, private route: Router) {}

	canActivate(): boolean {
		if (this.auth.get('isLoggedIn') === true) {
			return true;
		} else {
			this.route.navigateByUrl('/login');
			return false;
		}
	}

	canActivateChild(): boolean {
		return this.canActivate();
	}
}
