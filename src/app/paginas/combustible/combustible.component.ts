import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DpaService } from 'src/app/service/dpa-service';
import { getGerenciaNombre } from 'src/app/utils';

@Component({
  selector: 'app-combustible',
  standalone: false,
  templateUrl: './combustible.component.html',
  styleUrl: './combustible.component.css'
})
export class CombustibleComponent {

  totalesPorGerencia: Observable<any[]>;
  totalesPorMovil : Observable<any[]>;
  objetoGerencia :any;
  objetoMovil : any;
  getGerencia = getGerenciaNombre;
  constructor( private dpaService : DpaService){
    this.totalesPorGerencia = new Observable<any[]>;
    this.totalesPorMovil = new Observable<any[]>;
  }

  ngOnInit(){
    this.totalesPorGerencia = this.dpaService.getTotalesPorGerencia();
    this.totalesPorMovil = this.dpaService.getTotalesPorMovil();
    this.totalesPorGerencia.subscribe(resp => {
      this.objetoGerencia = {
        type: 'bar',
        data: {
          labels: resp.map(array => this.getGerencia(array[0]) ),
          datasets: [
            {
              label: 'Importes por gerencia',
              data: resp.map(array => array[1]),
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

      this.objetoMovil = {
        type: 'bar',
        data: {
          labels: resp.map(array => this.getGerencia(array[0]) ),
          datasets: [
            {
              label: 'Litros por gerencia',
              data: resp.map(array => array[2]),
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
    });
  }

  getSumatoria(array : any[] , indice : number){
    return array.map(array => array[indice]).reduce((acc, valor) => acc + valor , 0);
  }
  imprimir(resp: any) {
    console.log(resp)
  }

  
 
}
