import { Component } from '@angular/core';
import { ImpotacionService } from 'src/app/service/importacion-service';
import { PersonaServiceTsServiceService } from 'src/app/service/persona-service-ts-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rrhh',
  templateUrl: './rrhh.component.html',
  styleUrls: ['./rrhh.component.css']
})
export class RrhhComponent {
  urlImagen : string = "./assets/img/Ellipse 99.png";
  selectedFile: any;
  selectOption: any;
  cantidadPorGerencia$: Observable<any>;
  cantidadPorSindicato: Observable<any>;
  cantidadPorEmpresa: Observable<any>;

  subtitulos = [
    {
      titulo:"CANTIDADES",
      url:"/rrhh/totales"
    },
    {
      titulo:"NOMINA ACTIVA",
      url:"/rrhh/empleado"
    },
    {
      titulo:"ORGANIGRAMA",
      url:"/rrhh/totales"
    },
    {
      titulo:"BOLSA DE TRABAJO",
      url:"/rrhh/bolsa"
    },
  ]
  constructor(private  importacionService :ImpotacionService , private empleadoService : PersonaServiceTsServiceService){
    this.cantidadPorGerencia$ = new Observable<any>();
    this.cantidadPorSindicato = new Observable<any>();
    this.cantidadPorEmpresa = new Observable<any>();
  }
  ngOnInit() {
    this.cantidadPorGerencia$ = this.empleadoService.getCantidadPorGerencia();
    this.cantidadPorSindicato = this.empleadoService.getCantidadPorSindicato();
    this.cantidadPorEmpresa = this.empleadoService.getCantidadPorEmpresa();
  }
  
  
  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
    
    this.subirArchivoNomina();
  }

  subirArchivoNomina(){
    const formData = new FormData();
    if(!this.selectedFile){
      return;
    }

    formData.append('file', this.selectedFile);
    this.importacionService.subir(formData);
    setTimeout(() => {
     location.reload();
    }, 2000);
  }

}
