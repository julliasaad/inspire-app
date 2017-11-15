import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';

import { ActivatedRoute } from '@angular/router';
import { Feedback } from "nativescript-feedback";
import { IUser } from '../../../../interfaces/user';
import { LoadingProvider } from '../../../../providers/loading-provider';
import { LoginProvider } from '../../../../providers/login-provider';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { StateProvider } from '../../../../providers/state-provider';
import { UserProvider } from '../../../../providers/user-provider';

import dialogs = require("ui/dialogs");

@Component({
  moduleId: module.id,
  selector: "biography-page",
  styleUrls: ['./biography.css'],
  templateUrl: './biography.html',
  providers: []
})

export class BiographyPage implements OnInit {
  private feedback: Feedback;
  private experience: boolean;
  private doubt: boolean;

	public user: IUser = {
    id: null,
    type: null,
    biography: null,
  }

  public userUpdated: IUser = {
    name: null,
    email: null,
    type: null,
    biography: null,
    id: null
  }

  public bio: string;
  
  constructor(
    private loadingProvider: LoadingProvider,
    private routerExtensions: RouterExtensions,
    private stateProvider: StateProvider,
    private loginProvider: LoginProvider,
    private userProvider: UserProvider,
    private route: ActivatedRoute,
    
  ) {
    this.feedback = new Feedback();
  }

  ngOnInit() {
    this.loadingProvider.hide();
		this.route.queryParams.subscribe(params => {
      this.user.id = params['user'];
      this.user.type = params['type'];
    });
  }

  onEnviarTap() {
    this.loadingProvider.show("Analisando...");
    this.user = {
      id: this.user.id,
      type: "inspirer",
      biography: this.bio 
    };
    this.userProvider.create(this.user).subscribe(u => {
      this.userUpdated = u;
      this.loadingProvider.hide();
      this.feedback.success({
        title: "",
        message: "Informações cadastradas com sucesso!",
        duration: 1000
      });
      this.routerExtensions.navigate([`/login/`]);
    });
  }

  onBackTap() {
    // this.hideKeyboard();
    this.routerExtensions.back();
  }
}