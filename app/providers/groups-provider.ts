import { Headers, Http, RequestOptions } from '@angular/http';
import { IEvent, IGroup } from '../interfaces/events';

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
    let url = `https://api.meetup.com/find/groups?upcoming_events=true&photo-host=public&location=sorocaba&page=20&country=BR&sig_id=212425931&radius=45&category=34&sign=true&key=1f662c5e7a545270276f1b3a146d68`;
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
            next_event: group.next_event.id,
            group_photo: group.group_photo
          };
        });
        return Observable.of(data);
      });
  }
  
  getByUrlName(urlname: string, eventId: string): Observable<IEvent> {
		let url = `https://api.meetup.com/${urlname}/events/${eventId}?photo-host=public&sig_id=212425931&sign=true&key=1f662c5e7a545270276f1b3a146d68`;
    console.log(url);
    return this.http.get(url)
		.switchMap(r => {
      let result = r.json();
      
			if (result.erro) {
				throw new Error();
			}
			const data: IEvent = {
				name: result.name,
        description: result.description,
        local: result.venue,
        link: result.link
			};
			return Observable.of(data);
		});
	}
  
}