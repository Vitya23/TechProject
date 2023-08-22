import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { PostInterface } from 'src/app/post/types/post.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class PostService {
	constructor(private http: HttpClient) {}
	getPost(id: string): Observable<PostInterface> {
		const fullUrl = `${environment.apiUrl}/posts/${id}`;
		return this.http.get<PostInterface>(fullUrl).pipe(
			map((response: PostInterface) => {
				return response;
			}),
			catchError((err) => {
				return throwError(() => err);
			})
		);
	}
}
