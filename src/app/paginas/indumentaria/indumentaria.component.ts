import { Component } from '@angular/core';
import { FiltroService } from 'src/app/service/filtro-service';
import { ServiceindumentariaServiceService } from 'src/app/service/serviceindumentaria.service.service';

@Component({
  selector: 'app-indumentaria',
  templateUrl: './indumentaria.component.html',
  styleUrls: ['./indumentaria.component.css']
})
export class IndumentariaComponent {
  constructor(private filtroService : FiltroService , private indumentariaService : ServiceindumentariaServiceService){}

  ngOnInit(){
    this.filtroService.inicializarAutocompletable('#objetivo' , 'objetivoSelect2');
    this.filtroService.inicializarAutocompletable('#familia' , 'objetivoSelect2');
    this.filtroService.inicializarAutocompletable('#producto' , 'objetivoSelect2');
    this.filtroService.inicializarAutocompletable('#modelo' , 'objetivoSelect2');
   // this.getSumatoriaMensual(this.data[0]);

    this.indumentariaService.getIndumentariaFiltro().subscribe(resp =>{
      this.data = resp;
    });
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
              datos:[
                      ['AEP' , 2021 ,  21,14,16,71,75,97,45,171,279,150,205,267,1411],
                      ['AEP' , 2022]
                    ]
            }
          ]
  //           {
  //             gerencia:'EDENOR',
  //             rows :[
  //               {
  //                 anio:2021,
  //                 datos:[
  //                   21,14,16,71,75,97,45,171,279,150,205,267,1411
  //                 ]
  //               },
  //               {
  //                 anio:2022,
  //                 datos:[
  //                   21,14,16,71,75,97,45,171,279,150,205,267,1411
  //                 ]
  //               }
  //             ]
  //           }
        
          

  getSumatoriaMensual(obj:any){
    debugger;
    let arraySumas = [];
    if (obj) {
      for (let i = 0; i <= 12; i++) {
        let suma = 0
        if(i==12){
          debugger;
        }
        obj.datos.forEach( (row:any) => {
          let rowP = row.slice(2 , 15);
           suma += rowP[i];
         });
        arraySumas[i]=suma;
      }
      console.log(arraySumas);
    }
    return arraySumas;
  }

  getRowImprimible(array:any){
    let arrayAMostrar = [...array];
    arrayAMostrar.shift()
    return arrayAMostrar;
  }

  // getSumaFila(array:any){
  //   let suma = 0
  //   array.forEach( (dato:any) => {
  //     suma += dato;
  //   });
  //   return suma;
  // }
  
}
