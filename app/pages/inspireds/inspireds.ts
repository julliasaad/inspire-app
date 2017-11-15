import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';

import { IUser } from '../../interfaces/user';
import { LoadingProvider } from '../../providers/loading-provider';
import { LoginProvider } from '../../providers/login-provider';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Router } from '../../providers/router-provider';
import { StateProvider } from '../../providers/state-provider';
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
    private userProvider: UserProvider,
    private router: Router,
    
  ) {
    this.userProvider.list().subscribe(users => {
      this.users = users.filter((u) => u.type == "inspired");      
    });
  }

  ngOnInit() {
    this.loadingProvider.hide();
  }

  onSaberMais(user) {
    this.router.navigate(`/inspireds/detalhe?id=${user.id}`);
  }

  onBackTap() {
    // this.hideKeyboard();
    this.routerExtensions.back();
  } 
} 

