import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
// import { LoadingProvider } from '../../../providers/loading-provider';
// import { LoginProvider } from '../../../providers/login-provider';
import dialogs = require("ui/dialogs");
import { Page } from "ui/page";

@Component({
  moduleId: module.id,
  selector: "login-page",
  templateUrl: './login.html'
})
export class LoginPage {
  error: boolean;
  username: string;
  password: string;

  constructor(
    // private loadingProvider: LoadingProvider,
    // private loginProvider: LoginProvider,
    private routerExtensions: RouterExtensions,
    private page: Page
  ) {
    page.actionBarHidden = true;
    this.username = 'admin';
    this.password = '123';
  }

  login() {
    
  }

}
