import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { DrinkDetailComponent } from './drink-detail/drink-detail.component';
import { DrinkService } from './services/drink.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    DrinkListComponent,
    DrinkDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DrinkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
