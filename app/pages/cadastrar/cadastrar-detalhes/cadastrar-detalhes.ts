import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';

import { ActivatedRoute } from '@angular/router';
import { Feedback } from "nativescript-feedback";
import { IUser } from '../../../interfaces/user';
import { LoadingProvider } from '../../../providers/loading-provider';
import { LoginProvider } from '../../../providers/login-provider';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Router } from '../../../providers/router-provider';
import { StateProvider } from '../../../providers/state-provider';
import { UserProvider } from '../../../providers/user-provider';

import dialogs = require("ui/dialogs");

@Component({
  moduleId: module.id,
  selector: "cadastrar-page",
  styleUrls: ['./cadastrar-detalhes.css'],
  templateUrl: './cadastrar-detalhes.html',
  providers: []
})

export class CadastrarDetalhesPage implements OnInit {
  private feedback: Feedback;
  private experience: boolean;
  private doubt: boolean;

	public user: IUser = {
    id: null,
    type: null
  }

  constructor(
    private loadingProvider: LoadingProvider,
    private routerExtensions: RouterExtensions,
    private stateProvider: StateProvider,
    private loginProvider: LoginProvider,
    private userProvider: UserProvider,
    private route: ActivatedRoute,
    private router: Router,
    
  ) {
    this.feedback = new Feedback();
  }

  ngOnInit() {
    this.loadingProvider.hide();
		this.route.queryParams.subscribe(params => {
      this.user.id = params['user'];
      this.user.email = params['email'];
    });
  }

  onEnviarTap() {
    this.loadingProvider.show("Analisando...");
    if(this.experience && !this.doubt) {
      this.user = {
        id: this.user.id,
        type: "inspirer",
      };
      this.userProvider.create(this.user).subscribe(u => {
        this.loadingProvider.hide();      
      });
    } else {
      this.user = {
        id: this.user.id,
        type: "inspired",
      };
      this.userProvider.create(this.user).subscribe(u => {
        this.loadingProvider.hide();
      });
    }
    this.feedback.success({
      title: "",
      message: "Informações cadastradas com sucesso!",
      duration: 1000
    });
    this.routerExtensions.navigate([`/login/`]);
  }

  onBackTap() {
    // this.hideKeyboard();
    this.routerExtensions.back();
  }
  
}