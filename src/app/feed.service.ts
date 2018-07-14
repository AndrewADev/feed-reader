import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Article } from './article';
import { ARTICLES } from './mock-feed';

@Injectable()
export class FeedService {

  constructor() { }

  getArticles(): Observable<Article[]> {
    return of(ARTICLES);
  }

}
