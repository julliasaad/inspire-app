import { Component, OnInit } from "@angular/core";
import { LoadingProvider } from '../../../providers/loading-provider';
import { LoginProvider } from '../../../providers/login-provider';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import { StateProvider } from '../../../providers/state-provider';
import { PostProvider } from '../../../providers/post-provider';
import { IPost } from '../../../interfaces/post';
import { Feedback } from "nativescript-feedback";

@Component({
  moduleId: module.id,
  selector: "add-post-page",
  styleUrls: ['./add-post.css'],
  templateUrl: './add-post.html',
  providers: []
})

export class AddPostPage implements OnInit {
  private feedback: Feedback;
  
  public post: IPost = {
    id: null, 
    author: null, 
    title: null, 
    content: null
  }

  constructor(
    private loadingProvider: LoadingProvider,
    private routerExtensions: RouterExtensions,
    private stateProvider: StateProvider,
    private loginProvider: LoginProvider,
    private postProvider: PostProvider
  ) {
    this.feedback = new Feedback();    
  }

  ngOnInit() {
    this.loadingProvider.hide();
  }

  onEnviarPost() {
    this.loadingProvider.show("Enviando...");
      this.postProvider.create(this.post)
      .subscribe(u => {
        this.loadingProvider.hide();
        this.feedback.success({
          title: "",
          message: "Post enviado com sucesso com sucesso! Obrigada!",
          duration: 1000
        });
      });
  }

  onBackTap() {
    // this.hideKeyboard();
    this.routerExtensions.back();
  }
}