import { Component, OnInit } from "@angular/core";
import { LoadingProvider } from '../../../providers/loading-provider';
import { LoginProvider } from '../../../providers/login-provider';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import { StateProvider } from '../../../providers/state-provider';
import { PostProvider } from '../../../providers/post-provider';
import { IPost } from '../../../interfaces/post';

@Component({
  moduleId: module.id,
  selector: "post-detalhe-page",
  styleUrls: ['./post-detalhe.css'],
  templateUrl: './post-detalhe.html',
  providers: []
})

export class PostDetalhePage implements OnInit {
  public posts: IPost;

  constructor(
    private loadingProvider: LoadingProvider,
    private routerExtensions: RouterExtensions,
    private stateProvider: StateProvider,
    private loginProvider: LoginProvider

  ) {
  }

  ngOnInit() {
    this.loadingProvider.hide();
  }

  onBackTap() {
    // this.hideKeyboard();
    this.routerExtensions.back();
  }

}