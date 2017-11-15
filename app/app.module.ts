import { Http, HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import { NativeScriptRouterModule, RouterExtensions } from "nativescript-angular/router";
import { RouterModule, Routes } from "@angular/router";

import { AddPostPage } from './pages/administrativo/add-post/add-post';
import { AdministrativoPage } from './pages/administrativo/administrativo';
import { AppComponent } from "./app.component";
import { BiographyPage } from './pages/cadastrar/cadastrar-detalhes/biography/biography';
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
import { InspireMePage } from './pages/inspire-me/inspire-me';
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
import { PostDetalhePage } from './pages/inspire-me/post-detalhe/post-detalhe';
import { PostProvider } from './providers/post-provider';
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
    AddPostPage,
    AdministrativoPage,
    BiographyPage,
    CadastrarPage,
    CadastrarDetalhesPage,
    CursosPage,
    CursosDetalhePage,
    DashboardPage,
    EventosPage,
    EventosDetalhePage,
    InspireMePage,
    InspirersPage,
    InspirersDetalhePage,
    InspiredsPage,
    InspiredsDetalhePage,
    LoginPage,
    PalletTime,
    PostDetalhePage,
    VideosPage,
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
    CourseProvider,
    EnvironmentProvider,
    ExternalProvider,
    GroupsProvider,
    LoadingProvider,
    LoginProvider,
    PostProvider,
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
