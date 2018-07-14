import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Article } from './article';
import { ARTICLES } from './mock-feed';
import { mapTo } from 'rxjs/operators/mapTo';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})

};

@Injectable()
export class FeedService {

  private apiUrl = 'http://localhost:8080/www.sicher-im-netz.de/siba-app/siba/list/0';
  private articles: Article[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getArticles(): Observable<Article[]> {
    // if (this.articles.length < 1) {
    //   this.fetchArticles();
    // }
    // this.fetchArticles();
    // return of(this.articles);
    return this.http.get<Article[]>(this.apiUrl)
              .pipe(
                tap(articles => console.log(`Successfully fetched {{articles.length} articles`)),
                catchError(this.handleError('getArticles', []))
              );
  }

  getArticle(id: number): Observable<Article> {
    // We would probably want a call to an actual articles/{id} endpoint, if it were available
    return this.http.get<Article[]>(this.apiUrl)
      .pipe(
        map(articles => articles.find(article => +article.id === id)),
        catchError(this.handleError('getArticles', new Article()))
      );
  }

  private handleError<T> (method = 'method', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
