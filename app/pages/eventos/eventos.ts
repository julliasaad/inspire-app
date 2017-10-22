import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';

import { GroupsProvider } from '../../providers/groups-provider';
import { IGroup } from '../../interfaces/events';
import { LoadingProvider } from '../../providers/loading-provider';
import { LoginProvider } from '../../providers/login-provider';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { StateProvider } from '../../providers/state-provider';

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
  ) {
    this.groupsProvider.listGroups().subscribe(grupos => {
      this.grupos = grupos;
    });
  }

  onEventoTap() {
    this.routerExtensions.navigate([`/eventos/eventos-detalhe`]);
  }

  ngOnInit() {
    this.loadingProvider.hide();
  }

  onBackTap() {
    // this.hideKeyboard();
    this.routerExtensions.back();
  } 
  
}