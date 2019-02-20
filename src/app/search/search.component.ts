import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../services/drink.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private ds: DrinkService) { }

  ngOnInit() {
  }

  refreshList() {
    this.ds.getList();
  }
}
