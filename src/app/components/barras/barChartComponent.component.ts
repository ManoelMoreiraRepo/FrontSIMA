import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import 'chart.js/auto';


@Component({
  selector: 'app-bar-chart',
  template: '<canvas id="barChart" width="400" height="400"></canvas>',
})
export class BarChartComponent implements OnInit {
  ngOnInit() {
    this.createBarChart();
  }

  createBarChart() {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    const barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
        datasets: [
          {
            label: 'Sample Data',
            data: [10, 20, 15, 25],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
