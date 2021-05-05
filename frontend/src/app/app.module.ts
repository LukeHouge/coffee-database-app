import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCoffeeComponent } from './components/add-coffee/add-coffee.component';
import { CoffeeDetailsComponent } from './components/coffee-details/coffee-details.component';
import { CoffeesListComponent } from './components/coffees-list/coffees-list.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';

const routes: Routes = [
  { path: 'radar-chart', component: RadarChartComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AddCoffeeComponent,
    CoffeeDetailsComponent,
    CoffeesListComponent,
    RadarChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
