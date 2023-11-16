import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Chart, { ChartConfiguration } from 'chart.js/auto';
import 'chart.js/auto';


@Component({
  selector: 'app-bar-chart',
  template: '<canvas #barCanvas class="grafico" width="500" height="500"></canvas>',
})
export class BarChartComponent implements OnInit {
  @Input() objeto! : ChartConfiguration ;
  @ViewChild('barCanvas', { static: true }) barCanvas!: ElementRef;
  
  ngOnInit() {
    this.createBarChart();
  }

  createBarChart() {
    const ctx = this.barCanvas.nativeElement as HTMLCanvasElement;
    const barChart = new Chart(ctx, this.objeto );
  }
}
