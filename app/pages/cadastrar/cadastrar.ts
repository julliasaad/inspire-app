import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';

import { Feedback } from "nativescript-feedback";
import { IUser } from '../../interfaces/user';
import { LoadingProvider } from '../../providers/loading-provider';
import { LoginProvider } from '../../providers/login-provider';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Router } from '../../providers/router-provider';
import { StateProvider } from '../../providers/state-provider';
import { UserProvider } from '../../providers/user-provider';

import dialogs = require("ui/dialogs");

@Component({
  moduleId: module.id,
  selector: "cadastrar-page",
  styleUrls: ['./cadastrar.css'],
  templateUrl: './cadastrar.html',
  providers: []
})

export class CadastrarPage implements OnInit {
  private feedback: Feedback;

  public user: IUser = {
    id: null,
    name: null,
    email: null,
    password: null,
    biography: null,
    photo: null,
  }

  public userCreated: IUser = {
      id: null,
      name: null,
      email: null,
      password: null,
      biography: null,
      type: null,
      photo: null,
    }

  constructor(
    private loadingProvider: LoadingProvider,
    private routerExtensions: RouterExtensions,
    private stateProvider: StateProvider,
    private loginProvider: LoginProvider,
    private userProvider: UserProvider,
    private router: Router,
  ) {
    this.feedback = new Feedback();
  }

  ngOnInit() {
    this.loadingProvider.hide();
  }

  onCadastrarTap() {
    this.loadingProvider.show("Cadastrando...");

    this.userProvider.create(this.user)
    .subscribe(u => {
      this.userCreated = u;
      this.loadingProvider.hide();
      this.feedback.success({
        title: "",
        message: "Usuária cadastrada com sucesso!",
        duration: 1000
      });
      dialogs.confirm({
        title: "Continuar cadastro",
        message: "Para melhor uso do app, sugerimos que você faça o cadastro completo. Deseja prosseguir com o cadastro?",
        okButtonText: "Sim",
        neutralButtonText: "Não",
      }).then(result => {
        if(result) {
          console.dir(result);
          this.router.navigate(`/cadastrar/detalhes?user=${u.id}&email=${u.email}`);
        } else {
          this.routerExtensions.navigate([`/login/`]);
        }
      });
    });
  }

  onBackTap() {
    // this.hideKeyboard();
    this.routerExtensions.back();
  }
}