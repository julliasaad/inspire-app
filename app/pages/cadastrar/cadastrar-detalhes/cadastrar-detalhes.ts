import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';

import { ActivatedRoute } from '@angular/router';
import { Feedback } from "nativescript-feedback";
import { IUser } from '../../../interfaces/user';
import { LoadingProvider } from '../../../providers/loading-provider';
import { LoginProvider } from '../../../providers/login-provider';
import { NativeScriptRouterModule } from "nativescript-angular/router";
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
    type: null,
    biography: null
  }

	public userUpdated: IUser = {
    name: null,
    email: null,
    password: null,
    type: null,
    biography: null
  }

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
      this.user.email = params['user'];
			console.log(this.user.email);
    });
  }

  onEnviarTap() {
    this.loadingProvider.show("Analisando...");
    if(this.experience && !this.doubt) {
			this.user.type = 'inspirer';
			this.loadingProvider.hide();
			dialogs.prompt({
					title: "Você é uma mulher inspiradora!",
					message: "O que acha de ajudar a inspirar outras mulheres nos contando sobre sua história?",
					okButtonText: "Enviar",
					cancelButtonText: "Cancelar",
					defaultText: "Escreva sua biografia",
					inputType: dialogs.inputType.text
			}).then(function (r) {
				if(r.text && r.result) {
					this.user.biography = r.text;
					console.log(this.user);
					this.userProvider.create(this.user).subscribe(user => {
						console.dir(user);
						this.userUpdated = user;
						console.dir(this.userUpdated);
					});
				} else if(!r.text) {
					this.feedback.warning({
						title: "",
						message: "Você deve inserir uma biografia",
						duration: 1000
					});
				} else if(!r.result) {
					this.dialogs.hide();
				}
			});
    } else {
			this.loadingProvider.hide();
			dialogs.confirm({
				title: "Aqui você pode se inspirar!",
				message: "Vamos começar?!",
				okButtonText: "Your button text",
			}).then(function (result) {
				if(result) {
					this.routerExtensions.navigate([`/login/`]);
				}
			});
    }
    this.userProvider.create(this.user).subscribe(u => {
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
        cancelButtonText: "Não",
      }).then(result => {
          if(result) {

          } else {
            this.routerExtensions.navigate([`/login/`]);
          }
        });
    });
    // console.dir(this.user);
  }

  onBackTap() {
    // this.hideKeyboard();
    this.routerExtensions.back();
  }
}