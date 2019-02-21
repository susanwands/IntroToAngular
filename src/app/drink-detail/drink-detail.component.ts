import { Component, OnInit, Input } from '@angular/core';
import { DrinkService } from '../services/drink.service';
import { Drink } from '../models/drink';

@Component({
  selector: 'app-drink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: ['./drink-detail.component.scss']
})
export class DrinkDetailComponent implements OnInit {
  myDrink: any;
  ingredients: any;

  constructor(private ds: DrinkService) { }

  public ngOnInit() {
    this.ds.selectedDrinkData.subscribe((res) => {
      this.myDrink = res;
      this.ingredients = this.getIngredients(this.myDrink);
    });
  }

  public getIngredients(drink: string): Array<Drink> {
    let ingredients = [];

    for (let i = 1; i <= 15; i++) {
      if (drink['strIngredient' + i] && drink['strMeasure' + i]) {
        ingredients = ingredients.concat({
          ingredient: drink['strIngredient' + i],
          measure: drink['strMeasure' + i]
        });
      }
    }
    return ingredients;
  }

  closeDrink() {
    this.ds.clearSelectedDrink();
  }
}
