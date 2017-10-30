import { Component, OnInit } from "@angular/core";
import { LoadingProvider } from '../../../providers/loading-provider';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import { StateProvider } from '../../../providers/state-provider';
import { PostProvider } from '../../../providers/post-provider';
import { IPost } from '../../../interfaces/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: "post-detalhe-page",
  styleUrls: ['./post-detalhe.css'],
  templateUrl: './post-detalhe.html',
  providers: []
})

export class PostDetalhePage implements OnInit {
  public post: IPost = {
    id: null, 
    author: null, 
    title: null, 
    content: null
  };

  constructor(
    private loadingProvider: LoadingProvider,
    private routerExtensions: RouterExtensions,
    private stateProvider: StateProvider,
    private route: ActivatedRoute,
    private postProvider: PostProvider
    
  ) {
  }

  ngOnInit() {
    this.loadingProvider.hide();
		this.route.queryParams.subscribe(params => {
      this.post.id = params['id'];
    });

    this.postProvider.getById(this.post.id).subscribe(post => {
      this.post = post;
    })
  }

  onBackTap() {
    this.routerExtensions.back();
  }
  
}