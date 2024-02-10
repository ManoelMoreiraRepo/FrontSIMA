import { Component } from '@angular/core';

@Component({
  selector: 'app-dpa',
  templateUrl: './dpa.component.html',
  styleUrls: ['./dpa.component.css']
})
export class DpaComponent {
  componenteActivo = "parque";
  indiceActivo = 0;
  urlImagen : string = "./assets/img/dpa.png";
  subtitulos = [
    {
      titulo:"PARQUE AUTOMOTOR",
      url:"parque"
    },
    {
      titulo:"INFRACCIONES / SINIESTROS",
      url:"infracciones"
    }
  ]

  cambiarComponente(comp:string):void{
    this.componenteActivo = comp;
    this.indiceActivo = this.subtitulos.findIndex(e => e.url === comp);
  }
}
