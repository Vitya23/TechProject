import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-errorMessage',
	templateUrl: './errorMessage.component.html',
	styleUrls: ['./errorMessage.component.scss'],
})
export class ErrorMessageComponent {
	@Input('message') messageProps: string = 'Something went wrong';
	constructor(private location: Location) {}
	goBack() {
		this.location.back();
	}
}
