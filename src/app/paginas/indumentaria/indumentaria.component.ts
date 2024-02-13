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
  data = [
    {
      gerencia:'',
      datos:[
              [],
              []
            ]
    }
  ]
  ngOnInit(){
    this.filtroService.iniciarPickerAnios("selectAnios");
    this.filtroService.inicializarAutocompletable('#objetivo' , 'objetivoSelect2');
    this.filtroService.inicializarAutocompletable('#familia' , 'objetivoSelect2');
    this.filtroService.inicializarAutocompletable('#producto' , 'objetivoSelect2');
    this.filtroService.inicializarAutocompletable('#modelo' , 'objetivoSelect2');

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
  getSumatoriaMensual(obj:any){
    let arraySumas = [];
    if (obj) {
      for (let i = 0; i <= 12; i++) {
        let suma = 0
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
  
}
