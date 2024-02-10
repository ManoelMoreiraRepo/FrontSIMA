import { Component } from '@angular/core';

@Component({
  selector: 'app-suministros-principal',
  templateUrl: './suministros-principal.component.html',
  styleUrls: ['./suministros-principal.component.css']
})
export class SuministrosPrincipalComponent {
  urlImagen : string = "./assets/img/suministros.png";
  componenteActivo = "/suministros";
  indiceActivo = 0;
  subtitulos = [
    {
      titulo:"SUMINISTROS",
      url:"/suministros"
    },
    {
      titulo:"PERIFERICOS",
      url:"/perifericos"
    },
    {
      titulo:"EQUIPAMIENTOS",
      url:"/equipamientos"
    },
    {
      titulo:"INDUMENTARIA",
      url:"/indumentaria"
    }
  ]

  cambiarComponente(comp:string):void{
    this.componenteActivo = comp;
    this.indiceActivo = this.subtitulos.findIndex(e => e.url === comp);
  }
  
}
