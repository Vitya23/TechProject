import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-globalFeed',
	templateUrl: './globalFeed.component.html',
	styleUrls: ['./globalFeed.component.scss'],
})
export class GlobalFeedComponent implements OnInit {
	apiUrl = '/posts';
	constructor() {}

	ngOnInit() {}
}
