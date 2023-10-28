import { Component } from '@angular/core';
import { arrayMenuEmpleado } from 'src/app/constantes';

@Component({
  selector: 'app-empleadomain',
  templateUrl: './empleadomain.component.html',
  styleUrls: ['./empleadomain.component.css']
})
export class EmpleadomainComponent {
  urlSeparador = "./assets/img/gruposima.png";
  arrayAmostrar = arrayMenuEmpleado;
  // objrrh = {
  //   titulo:"RRHH",
  //   items:[
  //     {
  //       titulo:"BOLSA DE TRABAJO",
  //       descrip:"Reporte semanal de estado",
  //       img:"./assets/img/lupa.png"
  //     }
  //   ]
  // }
}
