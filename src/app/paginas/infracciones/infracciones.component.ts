import { Component } from '@angular/core';
import { DpaService } from 'src/app/service/dpa-service';

@Component({
  selector: 'app-infracciones',
  templateUrl: './infracciones.component.html',
  styleUrls: ['./infracciones.component.css']
})
export class InfraccionesComponent {
  urlImagen : string = "./assets/img/dpa.png";
  subtitulos = [
    {
      titulo:"PARQUE AUTOMOTOR",
      url:"/dpa/parque"
    },
    {
      titulo:"INFRACCIONES / SINIESTROS",
      url:"/dpa/infracciones"
    }
  ]
  data:any;

  constructor(private dpaService : DpaService){}

  ngOnInit(){
    this.dpaService.getEstadistica().subscribe((resp)=>{
      console.log(resp);
      this.data = resp;
    })
  }
}
