import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptHttpModule } from 'nativescript-angular';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { enableProdMode } from '@angular/core';
enableProdMode();

@NgModule({
  imports: [
    NativeScriptHttpModule,
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptFormsModule,
    routing
  ],
  exports: [NativeScriptRouterModule],
  declarations: [
    AppComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
