import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FeedService } from '../services/feed.service';
import { Subscription } from 'rxjs';
import { GetFeedResponseInterface } from '../types/GetFeedResponse.interface';

@Component({
	selector: 'app-feed',
	templateUrl: './feed.component.html',
	styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
	@Input('apiUrl') apiUrlProps: string;
	subscription: Subscription;
	posts: GetFeedResponseInterface[];
	error: string;
	constructor(private feedService: FeedService) {}

	ngOnInit(): void {
		this.subscription = this.feedService.getPosts(this.apiUrlProps).subscribe({
			next: (data) => {
				this.posts = data;
			},
			error: (err) => {
				this.error = err;
			},
		});
	}
	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
