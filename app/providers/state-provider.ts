import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class StateProvider {
    private state = {};

    constructor(
    ) { }

    clear() {
        this.state = {};
    }

    get(key: string) {
        return this.state[key];
    }

    set(key: string, value: any) {
        this.state[key] = value;
    }
}