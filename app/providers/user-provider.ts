import { Headers, Http, RequestOptions } from '@angular/http';

import { IGroup } from '../interfaces/events';
import { IUser } from '../interfaces/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { StateProvider } from './state-provider';

@Injectable()
export class UserProvider {

  constructor(
    private http: Http,
    private stateProvider: StateProvider
  ) { 
    
  }

  list(): Observable<IUser[]> {
    let url = `https://quiet-dawn-28527.herokuapp.com/api/user`;
		return this.http.get(url)
		.switchMap(r => {
			const result = r.json();
			if (result.erro) {
				throw new Error();
      }
			const data:IUser[] = result.map(user => {
				return {
          id: user._id,
          name: user.name,
          type: user.type,
          biography: user.biography
				};
			});
			return Observable.of(data);
		});
	}

  create(user: IUser): Observable<IUser> {
    let url = `https://quiet-dawn-28527.herokuapp.com/api/user`;
    return this.http.post(url, user)
      .switchMap(r => {
				const result = r.json();
				if (result.erro) {
					throw new Error();
				}
				const data: IUser = {
					id: result._id,
					name: result.name,
					email: result.email,
					biography: result.biography,
					type: result.type
				};
        return Observable.of(data);
    	});
  }

  getById(id: string): Observable<IUser> {
		let url = `https://quiet-dawn-28527.herokuapp.com/api/user/${id}`;
		return this.http.get(url)
		.switchMap(r => {
			const result = r.json();
			if (result.erro) {
				throw new Error();
			}
			const data: IUser = {
        id: result._id,
        name: result.name,
				biography: result.biography,
				email: result.email,
				type: result.type,
			};
			return Observable.of(data);
		});
	}
}