import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { DpaService } from 'src/app/service/dpa-service';
import { ImpotacionService } from 'src/app/service/importacion-service';

@Component({
  selector: 'app-parque',
  templateUrl: './parque.component.html',
  styleUrls: ['./parque.component.css']
})
export class ParqueComponent {

  constructor(private dpaService : DpaService , private importacionService : ImpotacionService ){}

  nombres : any = [];
  importes: any = [];
  cantidades: any = [];
  objeto : any;
  objeto2 : any;
 

  ngOnInit(){
    this.dpaService.getEstadistica().subscribe((resp)=>{
       console.log(resp);
      this.nombres = resp.gerencia;
      this.importes = resp.totales;

      this.objeto = {
        type: 'bar',
        data: {
          labels: this.nombres,
          datasets: [
            {
              label: 'INFRACCIONES Y TD',
              data: this.importes,
              backgroundColor: 'rgba(254, 159, 4)',
              borderColor: 'rgba(231, 144, 2)',
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
          elements: {
            bar: {
              backgroundColor: 'white',
            },
          }
        },
      }

      this.dpaService.getCantidadActivos().subscribe((resp)=>{
        this.cantidades = resp;

        this.objeto2 = {
          type: 'doughnut',
          data: {
            labels: this.nombres,
            datasets: [{
              label: 'PARQUE AUTOMOTOR',
              data: this.cantidades,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
              ],
              hoverOffset: 4
            }]
          },
          options: {
            plugins: {
              customCanvasBackgroundColor: {
                color: 'lightGreen',
              }
            }
          },
        }

      })

    })
  }

  getSumaTotal(obj :any){
    return  obj.data.datasets[0].data.reduce((suma:any,numero : any)=> suma+ numero, 0);
  }

}
