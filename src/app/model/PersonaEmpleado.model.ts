import { OnInit } from '@angular/core';
import { Empleado } from './empleado';
import { Indumentaria } from './Indumentaria.model';
import { Credencial } from './credencial';
import { Capacitacion } from './capacitacion';
import { Operacion } from './operacion';

/*interface iIndumentaria {
  idIndumentaria: number;
  tipoIndumentaria: string;
  nombreIndumentaria: string;
  talleIndumentaria: string;
  fechaUltimaEntregaIndumentaria: string;
  fechaProximaEntregaIndumentaria: string;
}

interface Credencial {
  idCredencial: number;
  codigoCredencial: string;
  nombreCredencial: string;
  fechaOtorgamentoCredencial: string;
  estadoCredencial: boolean;
  fechaVencimientoCredencial: string;
}

interface Capacitacion {
  idCapacitacion: number;
  nombreCapacitacion: string;
  fechaOtorgamientoCapacitacion: string;
  fechaVencimientoCapacitacion: string;
  estadoCapacitacion: boolean;
  codigoCapacitacion: string;
  
  operacion: any;
}*/

export class PersonaEmpleado {
  idEmpleado?: number;
  estadoEmpleado: string;
  dniempleado: string;
  nombreEmpleado: string;
  apellidoEmpleado: string;
  legajoEmpleado: string;
  fechaNascimentoEmpleado: Date;
  fechaAltaEmpleado: Date;
  objetivoEmpleado: string;
  turnoEmpleado: string;
  telefonoEmpleado: number;
  cargoEmpleado: string;
  emailEmpleado: string;
  direccionEmpleado: string;
  codigoPostalEmpleado: string;
  // img:string;
  indumentaria: Array <Indumentaria>= new Array<Indumentaria>();
  credencial : Array <Credencial>= new Array<Credencial>();
  capacitacion : Array <Capacitacion>= new Array<Capacitacion>();
  operacion!: Operacion;
  foto:any;
  sindicato:any;
  constructor(
    estadoEmpleado: string,
    dniempleado: string,
    nombreEmpleado: string,
    apellidoEmpleado: string,
    legajoEmpleado: string,
    fechaNascimentoEmpleado: Date,
    fechaAltaEmpleado: Date,
    objetivoEmpleado: string,
    turnoEmpleado: string,
    telefonoEmpleado: number,
    cargoEmpleado: string,
    emailEmpleado: string,
    direccionEmpleado: string,
    codigoPostalEmpleado: string,
    // img:string

  ) {
    this.estadoEmpleado = estadoEmpleado;
    this.dniempleado = dniempleado;
    this.nombreEmpleado = nombreEmpleado;

    this.apellidoEmpleado = apellidoEmpleado;
    this.legajoEmpleado = legajoEmpleado;
    this.fechaNascimentoEmpleado = fechaNascimentoEmpleado;
    this.fechaAltaEmpleado = fechaAltaEmpleado;

    this.objetivoEmpleado = objetivoEmpleado;
    this.turnoEmpleado = turnoEmpleado;
    this.telefonoEmpleado = telefonoEmpleado;

    this.cargoEmpleado = cargoEmpleado;
    this.emailEmpleado = emailEmpleado;
    this.direccionEmpleado = direccionEmpleado;
    this.codigoPostalEmpleado = codigoPostalEmpleado;
    // this.img= img;
  }
}
