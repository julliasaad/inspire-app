
import { Routes, RouterModule } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginPage } from './modules/home/login/login';


const appRoutes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },

];

export const routing = NativeScriptRouterModule.forRoot(appRoutes);