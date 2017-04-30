import { Component, OnInit } from '@angular/core';
import * as application from 'application';
import { AndroidActivityBackPressedEventData } from 'application';
import { Color } from 'color';
import { RouterExtensions } from 'nativescript-angular';
import { isAndroid } from 'platform';
import * as frameModule from 'ui/frame';

@Component({
  moduleId: module.id,
  selector: 'ns-app',
  template: `<page-router-outlet></page-router-outlet>`
})
export class AppComponent { }
