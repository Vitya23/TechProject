import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { PostInterface } from '../types/post.interface';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy {
	subscription: Subscription;
	post: PostInterface;
	id: string;
	error: string;
	constructor(private postService: PostService, private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.id = this.route.snapshot.paramMap.get('id');
		this.subscription = this.postService.getPost(this.id).subscribe({
			next: (data) => {
				this.post = data;
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
