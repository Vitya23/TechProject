import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetFeedResponseInterface } from '../types/GetFeedResponse.interface';

@Injectable()
export class FeedService {
	constructor(private http: HttpClient) {}

	getPosts(url: string): Observable<GetFeedResponseInterface[]> {
		const fullUrl = environment.apiUrl + url;
		return this.http.get<GetFeedResponseInterface[]>(fullUrl).pipe(
			map((data) => {
				return data;
			}),
			catchError((err) => {
				return throwError(() => err);
			})
		);
	}
}
