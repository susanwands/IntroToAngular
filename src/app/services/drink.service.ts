import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';


import { Drink } from '../models/drink';
import { HAMMER_LOADER } from '@angular/platform-browser';

@Injectable()

export class DrinkService {
  private baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';
  public searchUrl = `${this.baseUrl}search.php?s=`;
  public lookupUrl = `${this.baseUrl}lookup.php?i=`;



  private drinkList = new BehaviorSubject<Drink[]>([] as Drink[]);
  private selectedDrink = new BehaviorSubject<Drink>({} as Drink);
  private material = new BehaviorSubject<Array<any>>([''] as [any]);

  drinkListData = this.drinkList.asObservable();
  selectedDrinkData = this.selectedDrink.asObservable();
  materialData = this.material.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getSelectedDrink(id) {
    this.lookupDrink(id).subscribe(res => {
      const hold = res.drinks[0];
      this.selectedDrink.next(hold as Drink);
    });

  }

  clearSelectedDrink() {
    this.selectedDrink.next({} as Drink);
  }
  getList() {
    const myDrinks: Drink[] = [];
    for (let i = 0; i < 10; i++) {
      this.getRandomDrink().subscribe(res => {
        console.log(myDrinks);
        if (res.drinks) {
          myDrinks.push(res.drinks[0] as Drink);
        }

      });
    }


    this.drinkList.next(myDrinks);
  }

  public getRandomDrink(): Observable<any> {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  }

  public searchDrinks(query: string): Observable<[Drink]> {
    if (!query.trim()) { return of(); }

    return this.http.get<[Drink]>(this.searchUrl + query);

  }

  public lookupDrink(id: number): Observable<any> {

    return this.http.get<any>(this.lookupUrl + id);

  }


}
