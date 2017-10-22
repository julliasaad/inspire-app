import { Component, OnInit } from "@angular/core";
import { LoadingProvider } from '../../../providers/loading-provider';
import { LoginProvider } from '../../../providers/login-provider';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import { StateProvider } from '../../../providers/state-provider';

@Component({
  moduleId: module.id,
  selector: "eventos-detalhe-page",
  styleUrls: ['./eventos-detalhe.css'],
  templateUrl: './eventos-detalhe.html',
  providers: []
})

export class EventosDetalhePage implements OnInit {
  private data = {
    eventos: [ {
      titulo: 'Grupo 1',
      descricao: 'Grupo de tecnologia focado no desenvolvimento de aplicações mobile'
    },
    {
      titulo: 'Grupo 2',
      descricao: 'Grupo de tecnologia voltado ao público feminino'
    },
    {
      titulo: 'Grupo 3',
      descricao: 'Grupo de tecnologia voltado ao público feminino'
    },
    {
      titulo: 'Grupo 4',
      descricao: 'Grupo de tecnologia voltado ao público feminino'
    }]
  };
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

  onBackTap() {
    // this.hideKeyboard();
    this.routerExtensions.back();
  }

}