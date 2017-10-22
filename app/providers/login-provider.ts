import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { AuthHttp } from 'angular2-jwt/angular2-jwt';
// Providers
import { EnvironmentProvider } from './environment-provider';
import { IUser } from '../interfaces/user';
import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs/Rx';
import { StateProvider } from './state-provider';

@Injectable()
export class LoginProvider {
    jwtHelper: JwtHelper = new JwtHelper();

    constructor(
        private http: Http,
        private stateProvider: StateProvider,
        private environmentProvider: EnvironmentProvider,
    ) { }

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
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                password: user.password
            };
            });
            return Observable.of(data);
        });
    }

    login(user: IUser): Observable<boolean> {
        let url = `https://quiet-dawn-28527.herokuapp.com/api/login`;
        return this.http.post(url, user)
        .switchMap(r => {
            const result = r.json();
            return Observable.of(result);
        });
    }

    logout() {
        let token = this.stateProvider.get('token');
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` });
        let options = new RequestOptions({ headers });
        let url = `http://${this.environmentProvider.getEnderecoServidor()}/mobile/api/coletor/sessao/logout`;

        return this.http.post(url, {}, options).toPromise().then(res => {
            return res.text();
        });
    }
}