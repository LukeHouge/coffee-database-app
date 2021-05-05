import { Component, OnInit } from '@angular/core';
import { RadialChartOptions } from 'chart.js';
@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css'],
})
export class RadarChartComponent implements OnInit {
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
  public radarChartData = [
    { data: [4.25, 4.0, 4.25, 4.25, 4.25, 4.5, 4.0, 4.5, 4.25] },
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
  };

  public radarChartType = 'radar';
  constructor() {}
  ngOnInit() {}
}
