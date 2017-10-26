import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';

import { ICourse } from '../../interfaces/course';
import { IPost } from '../../interfaces/post';
import { LoadingProvider } from '../../providers/loading-provider';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { PostProvider } from '../../providers/post-provider';
import { Router } from '../../providers/router-provider';
import { StateProvider } from '../../providers/state-provider';

@Component({
  moduleId: module.id,
  selector: "inspire-me-page",
  styleUrls: ['./inspire-me.css'],
  templateUrl: './inspire-me.html',
  providers: []
})

export class InspireMePage implements OnInit {
  private data = {
    temas: [ {
      tema: 'Como me tornei desenvolvedora front-end',
    },
    {
      tema: 'Meu sonho de trabalhar com UX',
    },
    {
      tema: 'Como virei desenvolvedora Java',
    }]
  };

  public posts: Array<IPost>;

  constructor(
    private loadingProvider: LoadingProvider,
    private routerExtensions: RouterExtensions,
    private stateProvider: StateProvider,
    private router: Router,
    private postProvider: PostProvider
  ) {
    this.postProvider.list().subscribe(posts => {
      this.posts = posts;
    });
  }

  onPostTap(post) {
    console.dir(post);
    this.router.navigate(`/inspire-me/post?id=${post.id}`);
  }

  ngOnInit() {
    this.loadingProvider.hide();
  }

  onBackTap() {
    // this.hideKeyboard();
    this.routerExtensions.back();
  }
  
}