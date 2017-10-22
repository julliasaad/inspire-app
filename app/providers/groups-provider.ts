import { Headers, Http, RequestOptions } from '@angular/http';

import { IGroup } from '../interfaces/events';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { StateProvider } from './state-provider';

@Injectable()
export class GroupsProvider {

  constructor(
    private http: Http,
    private stateProvider: StateProvider
  ) { }

  listGroups(): Observable<IGroup[]>{
    let url = `https://api.meetup.com/find/groups?upcoming_events=true&photo-host=public&location=Sorocaba%2C+Brasil&page=20&country=brasil&sig_id=212425931&category=34&sig=56117750019c169fe18652f2d0f0c3d092174ce2`;
    return this.http.get(url)
      .switchMap(r => {
        const result = r.json();
        if (result.erro) {
          throw new Error();
        }
        const data:IGroup[] = result.map(group => {
          return {
            name: group.name,
            description: group.description,
            link: group.link,
          };
        });
        return Observable.of(data);
      });
  }
}