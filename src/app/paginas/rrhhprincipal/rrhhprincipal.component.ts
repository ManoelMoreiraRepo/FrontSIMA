import { Component } from '@angular/core';

@Component({
  selector: 'app-rrhhprincipal',
  templateUrl: './rrhhprincipal.component.html',
  styleUrls: ['./rrhhprincipal.component.css']
})
export class RrhhprincipalComponent {
  urlImagen : string = "./assets/img/Ellipse 99.png";
  indiceActivo = 0;
  componenteActivo = "/rrhh/totales";
  gerencia :string = '';
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

  procesarGerencia(gerencia:string){
    this.gerencia = gerencia;
    this.cambiarComponente(this.subtitulos[1].url);
  }

  cambiarComponente(comp:string):void{
    this.componenteActivo = comp;
    this.indiceActivo = this.subtitulos.findIndex(e => e.url === comp);
  }
}
