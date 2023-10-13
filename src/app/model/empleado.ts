export interface Empleado {

idEmpleado: number;
  estadoEmpleado: string;
  nombreEmpleado: string;
  apellidoEmpleado: string;
  legajoEmpleado: string;
  fechaNacimientoEmpleado: string;
  fechaAltaEmpleado: string;
  objetivoEmpleado: string;
  turnoEmpleado: string;
  telefonoEmpleado: number;
  cargoEmpleado: string;
  emailEmpleado: string;
  direccionEmpleado: string;
  codigoPostalEmpleado: string;
  indumentaria: Indumentaria[];
  credencial: Credencial[];
  capacitacion: Capacitacion[];
  operacion: any; // El tipo puede ser ajustado según tus necesidades
  dniempleado: string;
}

interface Indumentaria {
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
}
