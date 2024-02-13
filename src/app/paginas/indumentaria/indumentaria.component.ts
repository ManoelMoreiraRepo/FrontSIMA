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
  anios:any;
  gerencias :any;
  objetivo : any;
  familia : any;
  producto : any;
  modelo : any;

  filtro : any;

  filtroGerencia:any;

  ngOnInit(){
    this.filtroService.iniciarPickerAnios("selectAnios");
    
    this.filtroService.inicializarAutocompletable('objetivo' , 'OBJETIVO');
    this.filtroService.inicializarAutocompletable('familia' , 'FAMILIA');
    this.filtroService.inicializarAutocompletable('producto' , 'PRODUCTO');
    this.filtroService.inicializarAutocompletable('modelo' , 'MODELO');

    this.indumentariaService.getIndumentariaFiltro().subscribe(resp =>{
      this.data = resp;
    });
    this.filtroService.getFiltroSelect("GERENCIA" , false).subscribe(data =>{
      this.filtroGerencia = data.filtro;
    })
  }

  getFiltro(){
    let selectAnios = document.getElementById('selectAnios') as HTMLSelectElement
    var optionsAnios = selectAnios.selectedOptions;
    var valuesAnios = Array.from(optionsAnios).map(({ value }) => value);

    let selectGerencias = document.getElementById('gerencias') as HTMLSelectElement
    var optionsGerencias = selectGerencias.selectedOptions;
    var valuesGerencias = Array.from(optionsGerencias).map(({ value }) => value);

    let objetivo = this.filtroService.getValueSelect2('#objetivo');
    let familia = this.filtroService.getValueSelect2('#familia');
    let producto = this.filtroService.getValueSelect2('#producto');
    let modelo = this.filtroService.getValueSelect2('#modelo');

    this.filtro = {
      anios : valuesAnios,
      gerencias : valuesGerencias,
      objetivo : objetivo,
      familia : familia,
      producto : producto,
      modelo : modelo
    }
    return this.filtro;
  }
  limpiarFiltros(){
    this.filtroService.resetMultiselect('selectAnios');
    this.filtroService.resetMultiselect('gerencias');
    this.filtroService.resetSelect2('objetivo');
    this.filtroService.resetSelect2('familia');
    this.filtroService.resetSelect2('producto');
    this.filtroService.resetSelect2('modelo');
    this.onBuscar();
  }
  onBuscar(){
    this.indumentariaService.getIndumentariaFiltro(this.getFiltro()).subscribe(resp =>{
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
    }
    return arraySumas;
  }

  getRowImprimible(array:any){
    let arrayAMostrar = [...array];
    arrayAMostrar.shift()
    return arrayAMostrar;
  }
  
}
