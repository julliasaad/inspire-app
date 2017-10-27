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

  listVideos(): Observable<IVideo[]>{
	  let url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDCi-ya1u6NmyQz1-jzb0Rw-FGAEqfqWl4&channelId=UCuGSsUkNpoW8zh96ltNIP8A&part=snippet,id&order=date&maxResults=20`;
		return this.http.get(url)
		.switchMap(r => {
      let result = r.json();
      result = result.items;
			if (result.erro) {
				throw new Error();
			}
			const data: IVideo[] = result.map(video => {
				return {
          id: video.id.videoId,
          title: video.snippet.title,
          description: video.snippet.description,
          image: video.snippet.thumbnails.medium.url
				};
			});
			console.dir(data);
			return Observable.of(data);
		});
  }
}