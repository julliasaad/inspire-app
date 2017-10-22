import { Http, HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import { NativeScriptRouterModule, RouterExtensions } from "nativescript-angular/router";
import { RouterModule, Routes } from "@angular/router";

import { AdministrativoPage } from './pages/administrativo/administrativo';
import { AppComponent } from "./app.component";
import { CacheFactory } from 'cachefactory';
import { CacheProvider } from './providers/cache-provider';
import { CadastrarDetalhesPage } from './pages/cadastrar/cadastrar-detalhes/cadastrar-detalhes';
import { CadastrarPage } from './pages/cadastrar/cadastrar';
import { ComponentsModule } from './components/components.module';
import { CourseProvider } from './providers/course-provider';
import { CursosDetalhePage } from './pages/cursos/cursos-detalhe/cursos-detalhe';
import { CursosPage } from './pages/cursos/cursos';
import { DashboardPage } from './pages/dashboard/dashboard';
import { EnvironmentProvider } from './providers/environment-provider';
import { EventosDetalhePage } from './pages/eventos/eventos-detalhe/eventos-detalhe';
import { EventosPage } from './pages/eventos/eventos';
import { ExternalProvider } from './providers/external-providers';
import { GroupsProvider } from './providers/groups-provider';
import { InspiredsDetalhePage } from './pages/inspireds/inspireds-detalhe/inspireds-detalhe';
import { InspiredsPage } from './pages/inspireds/inspireds';
import { InspirersDetalhePage } from './pages/inspirers/inspirers-detalhe/inspirers-detalhe';
import { InspirersPage } from './pages/inspirers/inspirers';
import { LoadingProvider } from './providers/loading-provider';
import { LoginPage } from './pages/login/login';
import { LoginProvider } from './providers/login-provider';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from 'nativescript-angular';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { PalletTime } from './pipes/pallet-time.pipe';
import { Router } from './providers/router-provider';
import { StateProvider } from './providers/state-provider';
import { UserProvider } from './providers/user-provider';
import { VideosPage } from './pages/videos/videos';
import { WebviewCursoPage } from './pages/cursos/cursos-detalhe/webview-curso/webview-curso';
import { appRoutes } from './app.routing';
import { httpFactory } from "./interceptor/http-factory";

@NgModule({
  declarations: [
    AppComponent,
    AdministrativoPage,
    CadastrarPage,
    CadastrarDetalhesPage,
    CursosPage,
    CursosDetalhePage,
    EventosPage,
    EventosDetalhePage,
    InspirersPage,
    InspirersDetalhePage,
    InspiredsPage,
    InspiredsDetalhePage,
    VideosPage,
    PalletTime,
    LoginPage,
    DashboardPage,
    WebviewCursoPage
  ],
  bootstrap: [AppComponent],
  imports: [
    ComponentsModule,
    NativeScriptHttpModule,
    NativeScriptFormsModule,
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(appRoutes)
  ],
  providers: [
    CacheFactory,
    CacheProvider,
    GroupsProvider,
    CourseProvider,
    EnvironmentProvider,
    ExternalProvider,
    LoadingProvider,
    LoginProvider,
    Router,
    StateProvider,
    UserProvider,
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions, RouterExtensions]
    }
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
