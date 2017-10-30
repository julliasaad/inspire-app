import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';

import { GroupsProvider } from '../../providers/groups-provider';
import { IGroup } from '../../interfaces/events';
import { LoadingProvider } from '../../providers/loading-provider';
import { LoginProvider } from '../../providers/login-provider';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { StateProvider } from '../../providers/state-provider';
import { Router } from '../../providers/router-provider';

@Component({
  moduleId: module.id,
  selector: "eventos-page",
  styleUrls: ['./eventos.css'],
  templateUrl: './eventos.html',
  providers: []
})

export class EventosPage implements OnInit {

  private gruposResponse;
  private grupos: Array<IGroup>;

  constructor(
    private loadingProvider: LoadingProvider,
    private routerExtensions: RouterExtensions,
    private stateProvider: StateProvider,
    private loginProvider: LoginProvider,
    private groupsProvider: GroupsProvider,
    private router: Router,
    
  ) {
    this.groupsProvider.listGroups().subscribe(grupos => {
      this.grupos = grupos;
      console.dir(this.grupos);
    });
  }

  onEventoTap(grupo) {
    this.router.navigate(`/eventos/detalhe?urlname=${grupo.urlname}`);
  }

  ngOnInit() {
    this.loadingProvider.hide();
  }

  onBackTap() {
    // this.hideKeyboard();
    this.routerExtensions.back();
  } 
  
}