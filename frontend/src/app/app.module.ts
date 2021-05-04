import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCoffeeComponent } from './components/add-coffee/add-coffee.component';
import { CoffeeDetailsComponent } from './components/coffee-details/coffee-details.component';
import { CoffeesListComponent } from './components/coffees-list/coffees-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCoffeeComponent,
    CoffeeDetailsComponent,
    CoffeesListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
