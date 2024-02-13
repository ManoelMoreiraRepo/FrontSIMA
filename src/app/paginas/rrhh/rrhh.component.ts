import { Component, EventEmitter, Output } from '@angular/core';
import { PersonaServiceTsServiceService } from 'src/app/service/persona-service-ts-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rrhh',
  templateUrl: './rrhh.component.html',
  styleUrls: ['./rrhh.component.css']
})
export class RrhhComponent {
  @Output() cambiarGerencia = new EventEmitter<string>();
  cantidadPorGerencia$: Observable<any>;
  cantidadPorSindicato: Observable<any>;
  cantidadPorEmpresa: Observable<any>;

  constructor(private empleadoService : PersonaServiceTsServiceService){
    this.cantidadPorGerencia$ = new Observable<any>();
    this.cantidadPorSindicato = new Observable<any>();
    this.cantidadPorEmpresa = new Observable<any>();
  }
  ngOnInit() {
    this.cantidadPorGerencia$ = this.empleadoService.getCantidadPorGerencia();
    this.cantidadPorSindicato = this.empleadoService.getCantidadPorSindicato();
    this.cantidadPorEmpresa = this.empleadoService.getCantidadPorEmpresa();
  }
  
  enviarGerenciaAEmpleado(ger:string){
    this.cambiarGerencia.emit(ger);
  }
}
