import * as application from 'application';
import * as frameModule from 'ui/frame';

import { Component, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { AndroidActivityBackPressedEventData } from 'application';
import { CacheFactory } from 'cachefactory';
import { Color } from 'color';
import { isAndroid } from 'platform';

@Component({
  moduleId: module.id,
  selector: 'ns-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(private router: Router,
    @Inject(CacheFactory) private cacheFactory) {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd && this.cacheFactory.exists('entity')) {
        cacheFactory.destroy('entity');
      }
    });
  }
}

