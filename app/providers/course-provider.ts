import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { AuthHttp } from 'angular2-jwt/angular2-jwt';
// Providers
import { EnvironmentProvider } from './environment-provider';
import { ICourse } from '../interfaces/course';
import { IUser } from '../interfaces/user';
import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs/Rx';
import { StateProvider } from './state-provider';

@Injectable()
export class CourseProvider {
	jwtHelper: JwtHelper = new JwtHelper();

	constructor(
		private http: Http,
		private stateProvider: StateProvider,
		private environmentProvider: EnvironmentProvider,
	) { }

	list(): Observable<ICourse[]> {
		let url = `https://quiet-dawn-28527.herokuapp.com/api/course`;
		return this.http.get(url)
		.switchMap(r => {
			const result = r.json();
			if (result.erro) {
				throw new Error();
			}
			const data:ICourse[] = result.map(course => {
				return {
					name: course.name,
					description: course.description,
					category: course.category,
					link: course.link
				};
			});
			return Observable.of(data);
		});
	}
}