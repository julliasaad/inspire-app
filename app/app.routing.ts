import { RouterModule, Routes } from "@angular/router";

import { AddPostPage } from './pages/administrativo/add-post/add-post';
import { AdministrativoPage } from './pages/administrativo/administrativo';
import { CadastrarDetalhesPage } from './pages/cadastrar/cadastrar-detalhes/cadastrar-detalhes';
import { CadastrarPage } from './pages/cadastrar/cadastrar';
import { CursosDetalhePage } from './pages/cursos/cursos-detalhe/cursos-detalhe';
import { CursosPage } from './pages/cursos/cursos';
import { DashboardPage } from './pages/dashboard/dashboard';
import { EventosDetalhePage } from './pages/eventos/eventos-detalhe/eventos-detalhe';
import { EventosPage } from './pages/eventos/eventos';
import { InspireMePage } from './pages/inspire-me/inspire-me';
import { InspiredsDetalhePage } from './pages/inspireds/inspireds-detalhe/inspireds-detalhe';
import { InspiredsPage } from './pages/inspireds/inspireds';
import { InspirersDetalhePage } from './pages/inspirers/inspirers-detalhe/inspirers-detalhe';
import { InspirersPage } from './pages/inspirers/inspirers';
import { LoginPage } from './pages/login/login';
import { PostDetalhePage } from './pages/inspire-me/post-detalhe/post-detalhe';
import { VideosPage } from './pages/videos/videos';
import { WebviewCursoPage } from './pages/cursos/cursos-detalhe/webview-curso/webview-curso';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'cadastrar', component: CadastrarPage },
  { path: 'cadastrar/detalhes', component: CadastrarDetalhesPage },
  
  { path: 'login', component: LoginPage },
  { path: 'dashboard', component: DashboardPage },

  { path: 'administrativo', component: AdministrativoPage },
  { path: 'administrativo/post', component: AddPostPage },
  

  { path: 'eventos', component: EventosPage },
  { path: 'eventos/eventos-detalhe', component: EventosDetalhePage },

  { path: 'cursos', component: CursosPage },
  { path: 'cursos/cursos-detalhe', component: CursosDetalhePage }, 
  { path: 'cursos/cursos-detalhe/webview-curso', component: WebviewCursoPage },   

  { path: 'videos', component: VideosPage },
  
  { path: 'inspirers', component: InspirersPage },
  { path: 'inspirers/inspirers-detalhe', component: InspirersDetalhePage },

  { path: 'inspireds', component: InspiredsPage},
  { path: 'inspireds/inspireds-detalhe', component: InspiredsDetalhePage},

  { path: 'inspire-me', component: InspireMePage},
  { path: 'inspire-me/post', component: PostDetalhePage},
  
  
];
