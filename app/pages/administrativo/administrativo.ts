import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';

import { LoadingProvider } from '../../providers/loading-provider';
import { LoginProvider } from '../../providers/login-provider';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { StateProvider } from '../../providers/state-provider';

@Component({
  moduleId: module.id,
  selector: "administrativo-page",
  styleUrls: ['./administrativo.css'],
  templateUrl: './administrativo.html',
  providers: []
})

export class AdministrativoPage implements OnInit {

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

  onEnviarPost() {
    this.routerExtensions.navigate([`/administrativo/post`]);
  }

  onBackTap() {
    // this.hideKeyboard();
    this.routerExtensions.back();
  }
  
}