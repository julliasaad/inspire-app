
import { Routes, RouterModule } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const appRoutes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

];

export const routing = NativeScriptRouterModule.forRoot(appRoutes);