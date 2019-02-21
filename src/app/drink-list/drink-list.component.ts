import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../services/drink.service';
import { Drink } from '../models/drink';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit {

  drinkList: any;

  constructor(private ds: DrinkService) { }

  ngOnInit() {
    this.ds.getList();
    this.ds.drinkListData.subscribe(res => {
      if (res) {
        this.drinkList = res;
      }
    });
  }

  selectDrink(id) {
    this.ds.getSelectedDrink(id);
  }
}
