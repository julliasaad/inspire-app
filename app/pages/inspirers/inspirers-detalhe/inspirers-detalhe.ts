import { Component, OnInit } from "@angular/core";
import { LoadingProvider } from '../../../providers/loading-provider';
import { LoginProvider } from '../../../providers/login-provider';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import { StateProvider } from '../../../providers/state-provider';
import { IUser } from '../../../interfaces/user';
import { ActivatedRoute } from '@angular/router';
import { UserProvider } from '../../../providers/user-provider';

@Component({
  moduleId: module.id,
  selector: "inspirers-detalhe-page",
  styleUrls: ['./inspirers-detalhe.css'],
  templateUrl: './inspirers-detalhe.html',
  providers: []
})

export class InspirersDetalhePage implements OnInit {
  public user: IUser = {
    name: null, 
    biography: null 
  };

  constructor(
    private loadingProvider: LoadingProvider,
    private routerExtensions: RouterExtensions,
    private stateProvider: StateProvider,
    private loginProvider: LoginProvider,
    private route: ActivatedRoute,
    private userProvider: UserProvider
  ) {

  }

  ngOnInit() {
    this.loadingProvider.hide();
		this.route.queryParams.subscribe(params => {
      this.user.id = params['id'];
    });

    this.userProvider.getById(this.user.id).subscribe(user => {
      this.user = user;
    })
  }

  onBackTap() {
    // this.hideKeyboard();
    this.routerExtensions.back();
  } 
  
} 

