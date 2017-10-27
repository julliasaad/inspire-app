import { Component, OnInit } from "@angular/core";
import { LoadingProvider } from '../../providers/loading-provider';
import { LoginProvider } from '../../providers/login-provider';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import { StateProvider } from '../../providers/state-provider';
import { IUser } from '../../interfaces/user';
import { UserProvider } from '../../providers/user-provider';

@Component({
  moduleId: module.id,
  selector: "inspireds-page",
  styleUrls: ['./inspireds.css'],
  templateUrl: './inspireds.html',
  providers: []
})

export class InspiredsPage implements OnInit {
  public users: Array<IUser>;
  
  constructor(
    private loadingProvider: LoadingProvider,
    private routerExtensions: RouterExtensions,
    private stateProvider: StateProvider,
    private userProvider: UserProvider
  ) {
    this.userProvider.list().subscribe(users => {
      this.users = users;
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

