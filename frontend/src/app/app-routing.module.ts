import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoffeesListComponent } from './components/coffees-list/coffees-list.component';
import { CoffeeDetailsComponent } from './components/coffee-details/coffee-details.component';
import { AddCoffeeComponent } from './components/add-coffee/add-coffee.component';

const routes: Routes = [
  { path: '', redirectTo: 'coffees', pathMatch: 'full' },
  { path: 'coffees', component: CoffeesListComponent },
  { path: 'coffees/:id', component: CoffeeDetailsComponent },
  { path: 'add', component: AddCoffeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
