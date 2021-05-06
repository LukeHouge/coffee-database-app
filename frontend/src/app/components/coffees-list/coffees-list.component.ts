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
  mostCommonRoaster = '';
  mostCommonScore = 0;
  averageScore = 0;
  highestPrice = 0;
  lowestPrice = 0;
  averagePrice = 0;

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.retrievecoffees();
  }

  retrievecoffees(): void {
    this.coffeeService.getAll().subscribe(
      (data) => {
        this.coffees = data;
        this.coffees.sort((a, b) => b.score - a.score);
        this.mostCommonRoaster = mode(this.coffees, 'roaster');
        this.mostCommonScore = mode(this.coffees, 'score');
        // TODO: add name next to which one is lowest/highest etc. and also include the price I paid not per ounce
        this.lowestPrice = Math.min.apply(
          null,
          this.coffees.map((item) => item.price / item.size)
        );
        this.highestPrice = Math.max.apply(
          null,
          this.coffees.map((item) => item.price / item.size)
        );
        let totalPrice = 0;
        let totalScore = 0;
        this.coffees.forEach(function (coffee) {
          totalPrice += coffee.price / coffee.size;
          totalScore += coffee.score;
        });
        this.averagePrice = totalPrice / this.coffees.length;
        this.averageScore = totalScore / this.coffees.length;
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

/**
 * find the mode of an object field from array
 * @param array - array to find mode of
 * @param field - field of object to find mode of
 * @returns - mode of the array for given field
 */
function mode(array, field) {
  if (array.length == 0) return null;
  var modeMap = {};
  var maxEl = array[0].roaster,
    maxCount = 1;
  for (var i = 0; i < array.length; i++) {
    var el = array[i][field];
    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;
    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    }
  }
  return maxEl;
}
