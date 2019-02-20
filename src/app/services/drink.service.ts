import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, finalize } from 'rxjs/operators';
import { Drinks } from '../models/drinks';
import { Drink } from '../models/drink';

@Injectable()

export class DrinkService {
  private baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';
  public searchUrl = `${this.baseUrl}search.php?s=`;
  public lookupUrl = `${this.baseUrl}lookup.php?i=`;

  constructor(
    private http: HttpClient
  ) { }

  public getDrink() {
    return this.http.get<Drink>('https://www.thecocktaildb.com/api/json/v1/1/random.php').pipe(
      retry(3),
      catchError(this.handleError),
      finalize(() => {

      }));
  }
  public searchDrinks(query: string, waveElement: Element): Observable<Drinks> {
    if (!query.trim()) { return of(); }

    return this.http.get<Drinks>(this.searchUrl + query)
      .pipe(
        retry(3),
        catchError(this.handleError),
        finalize(() => {

        }));
  }

  public lookupDrink(id: number, waveElement: Element): Observable<Drinks> {
    if (waveElement) { waveElement.classList.add('header__wave--loading'); }

    return this.http.get<Drinks>(this.lookupUrl + id)
      .pipe(
        retry(3),
        catchError(this.handleError),
        finalize(() => {

        }));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error(`A client-side error occurred: ${error.error.message}`);
    } else {
      console.error(
        `A backend-side error occurred: ${error.status}: ${error.error}`);
    }

    alert('Something went wrong. Refresh the page and try again.');

    return throwError(error);
  }
}
