import { Component, OnInit } from "@angular/core";
import { LoadingProvider } from '../../providers/loading-provider';
import { LoginProvider } from '../../providers/login-provider';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import { StateProvider } from '../../providers/state-provider';

@Component({
  moduleId: module.id,
  selector: "inspirers-page",
  styleUrls: ['./inspirers.css'],
  templateUrl: './inspirers.html',
  providers: []
})

export class InspirersPage implements OnInit {
  private data = {
    inspirers: [ {
      nome: 'Amanda Vilela',
      descricao:'Trabalha na área há 2 anos, estuda na Fatec Sorocaba'
    },
    {
      nome: 'Ana Gabriel',
      descricao:'Trabalha na área há 2 anos, estuda na Fatec Sorocaba'      
    },
    {
      nome: 'Jullia Saad',
      descricao:'Trabalha na área há 2 anos, estuda na Fatec Sorocaba'      
    },
    {
      nome: 'Caroline Pascale',
      descricao:'Trabalha na área há 2 anos, estuda na Fatec Sorocaba'      
    }]
  };
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

  ngOnInit() {
    this.loadingProvider.hide();
  }

  onBackTap() {
    // this.hideKeyboard();
    this.routerExtensions.back();
  } 
} 

