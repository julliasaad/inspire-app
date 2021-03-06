import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';

import { CourseProvider } from '../../providers/course-provider';
import { ICourse } from '../../interfaces/course';
import { LoadingProvider } from '../../providers/loading-provider';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Router } from '../../providers/router-provider';
import { StateProvider } from '../../providers/state-provider';

@Component({
  moduleId: module.id,
  selector: "cursos-page",
  styleUrls: ['./cursos.css'],
  templateUrl: './cursos.html',
  providers: []
})

export class CursosPage implements OnInit {
  private data = {
    temas: [ {
      tema: 'Front-end',
    },
    {
      tema: 'Back-end',
    },
    {
      tema: 'Banco de Dados',
    }]
  };

  public courses: Array<ICourse>;

  constructor(
    private loadingProvider: LoadingProvider,
    private routerExtensions: RouterExtensions,
    private stateProvider: StateProvider,
    private courseProvider: CourseProvider,
    private router: Router,
  ) {
    this.courseProvider.list().subscribe(courses => {
      this.courses = courses;
    });
  }

  onTemaTap(tema: string) {
    console.dir(tema);
    if(tema === 'Front-end') {
      tema = 'frontend';
    }
    if(tema === 'Back-end') {
      tema = 'backend';
    }
    if(tema === 'Banco de Dados') {
      tema = 'database';
    }
    this.router.navigate(`/cursos/cursos-detalhe?tema=${tema}`);
  }

  ngOnInit() {
    this.loadingProvider.hide();
  }

  onBackTap() {
    // this.hideKeyboard();
    this.routerExtensions.back();
  } 
}