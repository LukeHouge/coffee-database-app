import { Component, OnInit } from '@angular/core';
import { CoffeeService } from 'src/app/services/coffee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Coffee } from 'src/app/models/coffee.model';

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.css'],
})
export class CoffeeDetailsComponent implements OnInit {
  currentcoffee: Coffee = {
    title: '',
    roaster: '',
    notes: '',
    link: '',
  };
  score = 0;
  price = 0;
  size = 0;
  date = 0;
  message = '';

  constructor(
    private coffeeService: CoffeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getcoffee(this.route.snapshot.params.id);
  }

  getcoffee(id: string): void {
    this.coffeeService.get(id).subscribe(
      (data) => {
        this.currentcoffee = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentcoffee.title,
      roaster: this.currentcoffee.roaster,
      price: this.currentcoffee.price,
      size: this.currentcoffee.size,
      date: this.currentcoffee.date,
      notes: this.currentcoffee.notes,
      link: this.currentcoffee.link,
      score: this.currentcoffee.score,
    };

    this.message = '';

    this.coffeeService.update(this.currentcoffee.id, data).subscribe(
      (response) => {
        console.log(response);
        this.message = response.message
          ? response.message
          : 'This coffee was updated successfully!';
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updatecoffee(): void {
    this.message = '';

    this.coffeeService
      .update(this.currentcoffee.id, this.currentcoffee)
      .subscribe(
        (response) => {
          console.log(response);
          this.message = response.message
            ? response.message
            : 'This coffee was updated successfully!';
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deletecoffee(): void {
    this.coffeeService.delete(this.currentcoffee.id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/coffees']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
