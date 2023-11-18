import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Chart, { ChartConfiguration } from 'chart.js/auto';
import 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  template: '<canvas #barCanvas class="grafico"></canvas>',
})
export class BarChartComponent implements OnInit {
  @Input() objeto!: ChartConfiguration;
  @Input() widthPercentage: number = 100; 
  @Input() heightPercentage: number = 100; 
  @ViewChild('barCanvas', { static: true }) barCanvas!: ElementRef;

  ngOnInit() {
    this.createBarChart();
  }

  createBarChart() {
    const ctx = this.barCanvas.nativeElement as HTMLCanvasElement;

    ctx.style.width = this.widthPercentage + '%';
    ctx.style.height = this.heightPercentage + '%';

    const barChart = new Chart(ctx, this.objeto);
  }
}
