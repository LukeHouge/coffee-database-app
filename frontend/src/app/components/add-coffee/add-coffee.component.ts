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
    description: '',
    published: false,
  };
  submitted = false;
  message = '';

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {}

  savecoffee(): void {
    const data = {
      title: this.coffee.title,
      description: this.coffee.description,
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
      description: '',
      published: false,
    };
  }
}
