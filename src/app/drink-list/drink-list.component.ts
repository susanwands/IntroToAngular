import { Component, OnInit } from '@angular/core';
import { DrinksService} from '../services/drinks.service'

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit {

  myDrink;

  constructor(private ds: DrinksService) { }

  ngOnInit() {
    this.ds.getRandomDrink().subscribe(data => {
      this.myDrink = data;
      console.log(this.myDrink);
    });
  }

}
