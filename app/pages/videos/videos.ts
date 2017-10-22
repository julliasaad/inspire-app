import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';

import { ExternalProvider } from '../../providers/external-providers';
import { IVideo } from '../../interfaces/video';
import { LoadingProvider } from '../../providers/loading-provider';
import { LoginProvider } from '../../providers/login-provider';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { StateProvider } from '../../providers/state-provider';

@Component({
  moduleId: module.id,
  selector: "videos-page",
  styleUrls: ['./videos.css'],
  templateUrl: './videos.html',
  providers: []
})

export class VideosPage implements OnInit {
  // public videos: Array<IVideo>;
  public videos: string;
  constructor(
    private loadingProvider: LoadingProvider,
    private routerExtensions: RouterExtensions,
    private stateProvider: StateProvider,
    private loginProvider: LoginProvider,
    private externalProvider: ExternalProvider

  ) {
    this.externalProvider.listVideos().subscribe(videos => {
      this.videos = videos;
      console.dir(videos);
    });
  }

  ngOnInit() {
    this.loadingProvider.hide();
  }

  onBackTap() {
    // this.hideKeyboard();
    this.routerExtensions.back();
  } 
}