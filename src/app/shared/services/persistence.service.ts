import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class PersistenceService {
	constructor(private lStorage: LocalStorageService) {}
	set(key: string, data: any): void {
		try {
			this.lStorage.store(key, JSON.stringify(data));
		} catch (e) {
			console.error('Error saving to localstorage', e);
		}
	}

	get(key: string): any {
		try {
			return JSON.parse(this.lStorage.retrieve(key));
		} catch (e) {
			console.error('Error getting data from localstorage', e);
			return null;
		}
	}
	observeStorageItem(key: string) {
		return this.lStorage.observe(key);
	}
}
