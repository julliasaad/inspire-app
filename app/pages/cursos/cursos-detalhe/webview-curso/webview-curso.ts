import { Component, OnInit } from "@angular/core";
import { LoadingProvider } from '../../../../providers/loading-provider';
import { LoginProvider } from '../../../../providers/login-provider';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import { StateProvider } from '../../../../providers/state-provider';
import { WebView, LoadEventData } from "ui/web-view";

@Component({
  moduleId: module.id,
  selector: "webview-curso-page",
  templateUrl: './webview-curso.html',
  providers: []
})

export class WebviewCursoPage implements OnInit {
  public webViewSrc: string = "https://www.codecademy.com/learn/learn-html";

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