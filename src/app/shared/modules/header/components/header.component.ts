import { Component, OnInit } from '@angular/core';
import { PersistenceService } from 'src/app/shared/services/persistence.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	isLoggedIn: boolean;
	constructor(private persistenceService: PersistenceService) {}

	ngOnInit(): void {
		this.initializeValue();
	}

	initializeValue() {
		if (this.isLoggedIn === undefined) {
			this.isLoggedIn = this.persistenceService.get('isLoggedIn');
		}

		this.persistenceService.observeStorageItem('isLoggedIn').subscribe((response) => {
			if (response) this.isLoggedIn = response === 'true';
		});
	}

	Logout(): void {
		this.persistenceService.set('isLoggedIn', false);
	}
}
