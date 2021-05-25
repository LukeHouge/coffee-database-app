import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoffeesListComponent } from './components/coffees-list/coffees-list.component';
import { CoffeeDetailsComponent } from './components/coffee-details/coffee-details.component';
import { AddCoffeeComponent } from './components/add-coffee/add-coffee.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // sets homepage
  { path: 'coffees', component: CoffeesListComponent },
  { path: 'coffees/:id', component: CoffeeDetailsComponent },
  { path: 'add', component: AddCoffeeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
