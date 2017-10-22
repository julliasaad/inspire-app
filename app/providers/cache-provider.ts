import { CacheFactory } from 'cachefactory';
import { Injectable } from '@angular/core';

@Injectable()
export class CacheProvider {
    constructor(
        private cacheFactory: CacheFactory,
    ) { }
}