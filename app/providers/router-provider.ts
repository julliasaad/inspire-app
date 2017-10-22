import * as platform from 'platform';

import { Injectable, NgZone } from '@angular/core';

import { NavigationOptions } from 'nativescript-angular/router/ns-location-strategy';
import { NavigationTransition } from 'ui/frame';
import { Router as NgRouter } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';
import { isDevMode } from '@angular/core';

export interface IRouterOptions {
  clearHistory?: boolean;
  fade?: boolean;
  animated?: boolean;
}

@Injectable()
export class Router {
  private transition: NavigationTransition = null;
  private defaultOptions: IRouterOptions = {
    clearHistory: false,
    fade: false,
    animated: true
  };

  constructor(
    private ngRouter: NgRouter,
    private routerExtensions: RouterExtensions,
    private ngZone: NgZone,
  ) {
    if (platform.isAndroid) {
      this.transition = { name: 'slide' };
    }

    let lastUrl = '';

    this.ngRouter.events.subscribe((event: any) => {
      const url = event.url.split('?')[0];
      if (url && url !== lastUrl) {
        lastUrl = url;
      }
    });
  }

  public currentUrl(): string {
    return this.ngRouter.url;
  }

  public isActive(url: string): boolean {
    return this.ngRouter.isActive(url, false);
  }

  public navigate(url: string, options: IRouterOptions = null): Promise<void> {
    const transitionOptions = this.loadOptions(options || {});

    console.log(`Navigating to ${url}`);
    return new Promise<any>(resolve => {
      setTimeout(() => {
        this.ngZone.run(() => {
          resolve(this.routerExtensions.navigateByUrl(url, transitionOptions));
        });
      });
    }).catch(err => {
      console.dir(err);
    });
  }

  public back(): void {
    setTimeout(() => {
      this.ngZone.run(() => {
        this.routerExtensions.backToPreviousPage();
      });
    });
  }

  private loadOptions(options: IRouterOptions): NavigationOptions {
    Object.keys(this.defaultOptions).forEach(key => {
      if (options[key] === undefined) {
        options[key] = this.defaultOptions[key];
      }
    });

    const transitionOptions: NavigationOptions = {
      clearHistory: options.clearHistory,
      animated: options.animated,
      transition: this.transition
    };

    if (options.fade) {
      transitionOptions.animated = true;
      transitionOptions.transition = { name: 'fade' };
    }

    if (!options.animated) {
      transitionOptions.transition = null;
    }

    return transitionOptions;
  }
}