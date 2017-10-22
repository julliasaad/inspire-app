import { Component, OnInit } from "@angular/core";

import { LoadingProvider } from '../../providers/loading-provider';
import { LoginProvider } from '../../providers/login-provider';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { StateProvider } from '../../providers/state-provider';

@Component({
  moduleId: module.id,
  selector: "dashboard-page",
  styleUrls: ['./dashboard.css'],
  templateUrl: './dashboard.html',
  providers: []
})

export class DashboardPage implements OnInit {
  private palletUrl: string;
  private produtoUrl: string;
  private filial;
  private filiais;
  private userData;
  private permissions;
  private permissionsCount = 0;

  constructor(
    private loadingProvider: LoadingProvider,
    private routerExtensions: RouterExtensions,
    private stateProvider: StateProvider,
    private loginProvider: LoginProvider

  ) {
    // this.filiais = this.stateProvider.get("filiais");
    // this.filial = this.stateProvider.get("filial");
    // this.permissions = this.stateProvider.get("permissions");
    // Object.keys(this.permissions).forEach(k => {
    //   if (this.permissions[k] === true) {
    //     this.permissionsCount++
    //   }
    // })
  }

  onEventosTap() {
    this.routerExtensions.navigate([`/eventos/`]);
  }

  onVideosTap() {
    this.routerExtensions.navigate([`/videos`]);
  }

  onInspirersTap() {
    this.routerExtensions.navigate([`/inspirers`]);
  }

  onInspireMeTap() {
    this.routerExtensions.navigate([`/inspire-me`]);
  }

  onCursosTap() {
    this.routerExtensions.navigate([`/cursos`]);
  }

  onInspiredsTap() {
    this.routerExtensions.navigate([`/inspireds`]);
  }

  ngOnInit() {
    this.loadingProvider.hide();
  }

  onLogoutTap() {
    this.stateProvider.clear();
    this.routerExtensions.navigate(['/'], { clearHistory: true });
  }
  
  onMeuPerfilTap() {
    this.routerExtensions.navigate([`/administrativo`]);
  }
  
}