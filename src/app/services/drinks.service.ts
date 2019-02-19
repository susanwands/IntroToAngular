import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  constructor(private http: HttpClient) { }

  getRandomDrink() {
    const response = this.http.get('http://www.thecocktaildb.com/api/json/v1/1/random.php');
    console.log(response);
    return response;
  }

  getDrinkList() {

  }

  getDrinkDetail(id: string) {
    const url = 'http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id;
    return this.http.get(url);
  }

  searchDrinks(text) {
    const url = 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + text;
    return this.http.get(url);
  }


  }
