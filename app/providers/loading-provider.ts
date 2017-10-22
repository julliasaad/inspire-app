import * as applicationSettings from 'application-settings';
import { Injectable } from '@angular/core';
import Loading = require("nativescript-loading-indicator");

@Injectable()
export class LoadingProvider {

    private loader: Loading.LoadingIndicator;

    hide() {
        if (this.loader) {
            this.loader.hide();
            this.loader = null;
        }
    }

    show(message: string) {
        if (this.loader) {
            this.loader.hide();
            this.loader = null;
        }

        this.loader = new Loading.LoadingIndicator();
        this.loader.show({
            message: message,
            progress: 0.65,
            android: {
                indeterminate: true,
                cancelable: false,
                max: 100,
                progressNumberFormat: "%1d/%2d",
                progressPercentFormat: 0.53,
                progressStyle: 1,
                secondaryProgress: 1
            },
            ios: {
                square: false,
                margin: 10,
                dimBackground: true,
                color: "#CCCCCC"
            }
        });

    }
}