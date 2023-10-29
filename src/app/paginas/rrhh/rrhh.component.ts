import { Component } from '@angular/core';
import { ImpotacionService } from 'src/app/service/importacion-service';
import { PersonaServiceTsServiceService } from 'src/app/service/persona-service-ts-service.service';
import { Observable } from 'rxjs';
import { RouterTestingHarness } from '@angular/router/testing';

@Component({
  selector: 'app-rrhh',
  templateUrl: './rrhh.component.html',
  styleUrls: ['./rrhh.component.css']
})
export class RrhhComponent {
  urlImagen : string = "./assets/img/Ellipse 99.png";
  selectedFile: any;
  selectOption: any;
  cantidadPorEmpresa$: Observable<any>;
  cantidadPorSindicato: Observable<any>;
  constructor(private  importacionService :ImpotacionService , private empleadoService : PersonaServiceTsServiceService){
    this.cantidadPorEmpresa$ = new Observable<any>();
    this.cantidadPorSindicato = new Observable<any>();
  }
  ngOnInit() {
    this.cantidadPorEmpresa$ = this.empleadoService.getCantidadPorEmpresa();
    this.cantidadPorSindicato = this.empleadoService.getCantidadPorSindicato();
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
  }

}
