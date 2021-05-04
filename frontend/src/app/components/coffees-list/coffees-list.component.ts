import { Component, OnInit } from '@angular/core';
import { Coffee } from 'src/app/models/coffee.model';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-coffees-list',
  templateUrl: './coffees-list.component.html',
  styleUrls: ['./coffees-list.component.css'],
})
export class CoffeesListComponent implements OnInit {
  coffees?: Coffee[];
  currentcoffee?: Coffee;
  currentIndex = -1;
  title = '';

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.retrievecoffees();
  }

  retrievecoffees(): void {
    this.coffeeService.getAll().subscribe(
      (data) => {
        this.coffees = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.retrievecoffees();
    this.currentcoffee = undefined;
    this.currentIndex = -1;
  }

  setActivecoffee(coffee: Coffee, index: number): void {
    this.currentcoffee = coffee;
    this.currentIndex = index;
  }

  removeAllcoffees(): void {
    this.coffeeService.deleteAll().subscribe(
      (response) => {
        console.log(response);
        this.refreshList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  searchTitle(): void {
    this.currentcoffee = undefined;
    this.currentIndex = -1;

    this.coffeeService.findByTitle(this.title).subscribe(
      (data) => {
        this.coffees = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
