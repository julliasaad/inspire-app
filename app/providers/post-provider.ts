import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { AuthHttp } from 'angular2-jwt/angular2-jwt';
// Providers
import { EnvironmentProvider } from './environment-provider';
import { IPost } from '../interfaces/post';
import { IUser } from '../interfaces/user';
import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs/Rx';
import { StateProvider } from './state-provider';

@Injectable()
export class PostProvider {
	jwtHelper: JwtHelper = new JwtHelper();

	constructor(
		private http: Http,
		private stateProvider: StateProvider,
		private environmentProvider: EnvironmentProvider,
	) { }

	list(): Observable<IPost[]> {
		let url = `https://quiet-dawn-28527.herokuapp.com/api/post`;
		return this.http.get(url)
		.switchMap(r => {
			const result = r.json();
			if (result.erro) {
				throw new Error();
			}
			const data:IPost[] = result.map(post => {
				return {
					id: post._id,
					author: post.author,
					title: post.title,
					content: post.content,
					image: post.image
				};
			});
			return Observable.of(data);
		});
	}

	create(post: IPost): Observable<IPost> {
    let url = `https://quiet-dawn-28527.herokuapp.com/api/post`;
    return this.http.post(url, post)
      .switchMap(r => {
		const result = r.json();
        console.dir(result);
        return Observable.of(result);
    	});
	}
	
	getById(id: string): Observable<IPost> {
		let url = `https://quiet-dawn-28527.herokuapp.com/api/post/${id}`;
		return this.http.get(url)
		.switchMap(r => {
			const result = r.json();
			if (result.erro) {
				throw new Error();
			}
			const data: IPost = {
				id: result.id,
				author: result.author,
				title: result.title,
				content: result.content,
				image: result.image
			};
			return Observable.of(data);
		});
	}
}