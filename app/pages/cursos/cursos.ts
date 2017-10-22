import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';

import { CourseProvider } from '../../providers/course-provider';
import { ICourse } from '../../interfaces/course';
import { LoadingProvider } from '../../providers/loading-provider';
import { NativeScriptRouterModule } from "nativescript-angular/router";
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
    cursos: [ {
      titulo: 'Curso 1',
      descricao: 'Curso de tecnologia focado no desenvolvimento de aplicações mobile'
    },
    {
      titulo: 'Curso 2',
      descricao: 'Curso de tecnologia voltado ao público feminino'
    },
    {
      titulo: 'Curso 3',
      descricao: 'Curso de tecnologia voltado ao público feminino'
    },
    {
      titulo: 'Curso 4',
      descricao: 'Curso de tecnologia voltado ao público feminino'
    }]
  };

  public courses: Array<ICourse>;

  constructor(
    private loadingProvider: LoadingProvider,
    private routerExtensions: RouterExtensions,
    private stateProvider: StateProvider,
    private courseProvider: CourseProvider
  ) {
    this.courseProvider.list().subscribe(courses => {
      this.courses = courses;
    });
  }

  onCursoTap() {
    this.routerExtensions.navigate([`/cursos/cursos-detalhe`]);
  }

  ngOnInit() {
    this.loadingProvider.hide();
  }

  onBackTap() {
    // this.hideKeyboard();
    this.routerExtensions.back();
  } 
}