import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Feedback, FeedbackPosition, FeedbackType } from "nativescript-feedback";

import { IUser } from '../../interfaces/user';
import { LoadingProvider } from '../../providers/loading-provider';
import { LoginProvider } from '../../providers/login-provider';
import { Page } from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import { isAndroid } from 'platform';

import dialogs = require("ui/dialogs");

@Component({
  moduleId: module.id,
  selector: "login-page",
  styleUrls: ['./login.css'],
  templateUrl: './login.html',
  providers: []
})

export class LoginPage implements OnInit {
  private codigo: string;
  private error: boolean;
  private feedback: Feedback;
  private password: string;
  private email: string;
  public users: Array<IUser>;
  public user: IUser;

  @ViewChild("emailInput") emailInput: ElementRef;
  @ViewChild("passwordInput") passwordInput: ElementRef;

  constructor(
    private loadingProvider: LoadingProvider,
    private loginProvider: LoginProvider,
    private routerExtensions: RouterExtensions,
    private page: Page
  ) {
    page.actionBarHidden = true;
    this.feedback = new Feedback();
  }

  ngOnInit() {
    this.loadingProvider.hide();
    // this.loginProvider.list().subscribe(users => {
    //   this.users = users;
    // });
  }

  hideKeyboard() {
    if (isAndroid) {
      try {
        this.emailInput.nativeElement.dismissSoftInput();
        this.passwordInput.nativeElement.dismissSoftInput();
      } catch (err) {
        console.log(err);
      }
    }
  }

  onLoginTap() {
    this.user = {
      email: this.email,
      password: this.password
    }
    
    this.hideKeyboard();
    // this.routerExtensions.navigate([`/dashboard/`], { clearHistory: true });
    if (!this.email || !this.password) {
      this.feedback.warning({
        title: "",
        message: "Usuário e senha são obrigatórios",
        duration: 1000
      });
      return;
    }

    this.loadingProvider.show('Acessando...');
    var resposta: boolean = false;
    this.loginProvider.login(this.user).map(res => {
        resposta = res;
      }).subscribe({
      complete: () => {
        if(resposta) {
          this.routerExtensions.navigate([`/dashboard/`], { clearHistory: true });
        } else {
          this.loadingProvider.hide();
          this.feedback.warning({
            title: "",
            message: "Usuária ou senha inválidos",
            duration: 1000
          });
          this.password = '';
        }
      }, 
      error: () => {
        this.loadingProvider.hide();
          this.feedback.warning({
            title: "",
            message: "Ocorreu um erro ao tentar logar",
            duration: 1000
          });
          this.password = '';
      }
    });
  }

  onCadastrarTap() {
      this.routerExtensions.navigate([`/cadastrar/`]);
  }
}
