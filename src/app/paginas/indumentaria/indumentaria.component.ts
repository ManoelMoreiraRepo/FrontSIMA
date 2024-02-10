import { Component } from '@angular/core';
import { FiltroService } from 'src/app/service/filtro-service';

@Component({
  selector: 'app-indumentaria',
  templateUrl: './indumentaria.component.html',
  styleUrls: ['./indumentaria.component.css']
})
export class IndumentariaComponent {
  constructor(private filtroService : FiltroService){}

  ngOnInit(){
    this.filtroService.inicializarAutocompletable('#objetivo' , 'objetivoSelect2');
    this.filtroService.inicializarAutocompletable('#familia' , 'objetivoSelect2');
    this.filtroService.inicializarAutocompletable('#producto' , 'objetivoSelect2');
    this.filtroService.inicializarAutocompletable('#modelo' , 'objetivoSelect2');
    this.getSumatoriaMensual(this.data[0]);
  }

  generateNumbers(): number[] {
    let numbers: number[] = [];
    let i = 1;
    while (i <= 12) {
      numbers.push(i);
      i++;
    }
    return numbers;
  }

  
  data = [
            {
              gerencia:'AEP',
              rows :[
                {
                  anio:2021,
                  datos:[
                    21,14,16,71,75,97,45,171,279,150,205,267,1411
                  ]
                },
                {
                  anio:2022,
                  datos:[
                    21,14,16,71,75,97,45,171,279,150,205,267,1411
                  ]
                }
              ]
            },
            {
              gerencia:'EDENOR',
              rows :[
                {
                  anio:2021,
                  datos:[
                    21,14,16,71,75,97,45,171,279,150,205,267,1411
                  ]
                },
                {
                  anio:2022,
                  datos:[
                    21,14,16,71,75,97,45,171,279,150,205,267,1411
                  ]
                }
              ]
            }
        
          ]

  getSumatoriaMensual(obj:any){
    let arraySumas = [];
    if (obj) {
      for (let i = 0; i <= 12; i++) {
        let suma = 0
        obj.rows.forEach( (row:any) => {
           suma += row.datos[i];
         });
        arraySumas[i]=suma;
      }
      console.log(arraySumas);
    }
    return arraySumas;
  }

  // getSumaFila(array:any){
  //   let suma = 0
  //   array.forEach( (dato:any) => {
  //     suma += dato;
  //   });
  //   return suma;
  // }
  
}
