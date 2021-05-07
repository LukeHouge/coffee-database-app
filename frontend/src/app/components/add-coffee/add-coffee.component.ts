import { Component, OnInit } from '@angular/core';
import { Coffee } from 'src/app/models/coffee.model';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-add-coffee',
  templateUrl: './add-coffee.component.html',
  styleUrls: ['./add-coffee.component.css'],
})
export class AddCoffeeComponent implements OnInit {
  coffee: Coffee = {
    title: '',
    roaster: '',
    notes: '',
    link: '',
  };
  submitted = false;
  score = 0;
  price = 0;
  size = -0;
  date = 0;
  aroma = 0;
  body = 0;
  flavor = 0;
  acidity = 0;
  sweetness = 0;
  balance = 0;
  cleanliness = 0;
  aftertaste = 0;
  complexity = 0;
  message = '';

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {}

  savecoffee(): void {
    const data = {
      title: this.coffee.title,
      roaster: this.coffee.roaster,
      price: this.coffee.price,
      size: this.coffee.size,
      date: this.coffee.date,
      notes: this.coffee.notes,
      link: this.coffee.link,
      aroma: this.coffee.aroma,
      body: this.coffee.body,
      flavor: this.coffee.flavor,
      acidity: this.coffee.acidity,
      sweetness: this.coffee.sweetness,
      balance: this.coffee.balance,
      cleanliness: this.coffee.cleanliness,
      aftertaste: this.coffee.aftertaste,
      complexity: this.coffee.complexity,
    };

    this.coffeeService.create(data).subscribe(
      (response) => {
        this.message = response.message
          ? response.message
          : 'This coffee was updated successfully!';
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newcoffee(): void {
    this.submitted = false;
    this.coffee = {
      title: '',
      roaster: '',
      notes: '',
      link: '',
    };
  }
}
