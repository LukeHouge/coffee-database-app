import { Component, Input, OnInit } from '@angular/core';
import { RadialChartOptions } from 'chart.js';
@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css'],
})
export class RadarChartComponent implements OnInit {
  @Input('data') data: [{}];

  public radarChartLabels = [
    'Aroma',
    'Body',
    'Flavor',
    'Acidity/Brightness',
    'Sweetness',
    'Balance',
    'Cleanliness',
    'Aftertaste',
    'Complexity',
  ];
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
    scale: {
      ticks: {
        beginAtZero: true,
        max: 5,
        min: 0,
      },
    },
    legend: {
      display: false,
    },
  };

  public radarChartType = 'radar';
  constructor() {}
  ngOnInit() {
    console.log(this.data);
  }
}
