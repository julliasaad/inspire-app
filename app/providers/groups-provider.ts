import { Headers, Http, RequestOptions } from '@angular/http';

import { IGroup, IEvent } from '../interfaces/events';
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
            urlname: group.urlname,
            description: group.description,
            link: group.link,
          };
        });
        return Observable.of(data);
      });
  }
  getByUrlName(urlname: string): Observable<IEvent> {
		let url = `https://api.meetup.com/${urlname}/events?scroll=recent_past&photo-host=public&page=20&sig_id=212425931&status=upcoming&sig=b1e1de4d33a092f283d634009dfe526ab93f392a`;
		return this.http.get(url)
		.switchMap(r => {
      let result = r.json();
      
      console.dir(result);
			if (result.erro) {
				throw new Error();
			}
			const data: IEvent = {
				name: result[0].name,
        description: result[0].description,
        local: result[0].venue,
        link: result[0].link
			};
			return Observable.of(data);
		});
	}
}