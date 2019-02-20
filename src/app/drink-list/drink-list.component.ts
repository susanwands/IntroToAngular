import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../services/drink.service';
import { Drink } from '../models/drink';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit {

  myDrink;

  constructor(private ds: DrinkService) { }

  ngOnInit() {

  }

}
