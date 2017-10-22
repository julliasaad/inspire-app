import { Component, OnInit } from "@angular/core";
import { LoadEventData, WebView } from "ui/web-view";
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';

import { ActivatedRoute } from '@angular/router';
import { CourseProvider } from '../../../providers/course-provider';
import { ICourse } from '../../../interfaces/course';
import { LoadingProvider } from '../../../providers/loading-provider';
import { LoginProvider } from '../../../providers/login-provider';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { StateProvider } from '../../../providers/state-provider';

@Component({
  moduleId: module.id,
  selector: "cursos-detalhe-page",
  styleUrls: ['./cursos-detalhe.css'],
  templateUrl: './cursos-detalhe.html',
  providers: []
})

export class CursosDetalhePage implements OnInit {
  public webViewSrc: string = "https://www.codecademy.com/learn/learn-html";

  public tema: string;

  public courses: Array<ICourse>; 

  constructor(
    private loadingProvider: LoadingProvider,
    private routerExtensions: RouterExtensions,
    private stateProvider: StateProvider,
    private loginProvider: LoginProvider,
		private route: ActivatedRoute,
    private courseProvider: CourseProvider,

  ) {
  }

  ngOnInit() {
    this.loadingProvider.hide();
    this.route.queryParams.subscribe(params => {
      this.tema = params['tema'];
			console.log(this.tema);
    });
    this.courseProvider.list().subscribe(course => {
      this.courses = course.filter(c => c.category === this.tema);
      console.dir(this.courses);
    });
  }

  onCursoTap() {
    this.routerExtensions.navigate([`/cursos/cursos-detalhe/webview-curso`]);
  }

  onBackTap() {
    // this.hideKeyboard();
    this.routerExtensions.back();
  } 
  
}