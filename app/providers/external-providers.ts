import { Headers, Http, RequestOptions } from '@angular/http';

import { IVideo } from '../interfaces/video';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { StateProvider } from './state-provider';

@Injectable()
export class ExternalProvider {

  constructor(
    private http: Http,
    private stateProvider: StateProvider
  ) { }

  listVideos(): Observable<string>{
	  let url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDCi-ya1u6NmyQz1-jzb0Rw-FGAEqfqWl4&channelId=UCuGSsUkNpoW8zh96ltNIP8A&part=snippet,id&order=date&maxResults=20`;
    return this.http.get(url)
      .switchMap(r => {
        const result = r.json();
        if (result.erro) {
          throw new Error();
        }
        // const data = result.map(video => {
        //   console.dir(video);
        //   return {
        //     video: video.items
        //   };
        // });
				// console.dir(data);
        return Observable.of(result);
      });
  }
}