import { Component, OnInit } from "@angular/core";
import { LoadingProvider } from '../../../providers/loading-provider';
import { LoginProvider } from '../../../providers/login-provider';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import { StateProvider } from '../../../providers/state-provider';
import { GroupsProvider } from '../../../providers/groups-provider';
import { IEvent, ILocal } from '../../../interfaces/events';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: "eventos-detalhe-page",
  styleUrls: ['./eventos-detalhe.css'],
  templateUrl: './eventos-detalhe.html',
  providers: []
})

export class EventosDetalhePage implements OnInit {
  public event: IEvent = {
    name: null,
    description: null,
    local: null,
    link: null
  };
  
  constructor(
    private loadingProvider: LoadingProvider,
    private routerExtensions: RouterExtensions,
    private stateProvider: StateProvider,
    private loginProvider: LoginProvider,
    private route: ActivatedRoute,
    private groupsProvider: GroupsProvider
  ) {
  }

  ngOnInit() {
    this.loadingProvider.hide();
		this.route.queryParams.subscribe(params => {
      this.event.urlname = params['urlname'];
    });

    this.groupsProvider.getByUrlName(this.event.urlname).subscribe(event => {
      // console.dir(this.event);
      this.event = event;
    })
  }

  onBackTap() {
    // this.hideKeyboard();
    this.routerExtensions.back();
  }
}