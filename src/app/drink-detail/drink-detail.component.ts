import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DrinkService } from '../services/drink.service';
import { Drinks } from '../models/drinks';
import { Drink } from '../models/drink';

@Component({
  selector: 'app-drink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: ['./drink-detail.component.scss']
})
export class DrinkDetailComponent implements OnInit {
  @Input() drink: Drinks;

  myDrink: any;
  ingredients: any;

  constructor(

    private drinkService: DrinkService
  ) { }



  public getIngredients(drink: string): Array<Drinks> {
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

  public ngOnInit(): void {


    this.drinkService.selectedDrinkData.subscribe((res) => {
      this.myDrink = res;
      this.ingredients = this.getIngredients(this.myDrink);
    });
  }

  closeDrink() {
    this.drinkService.clearSelectedDrink();
  }
}
