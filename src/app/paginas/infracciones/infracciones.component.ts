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

  mostrarCantidad(){
    let importe = document.getElementById("importe");
    let cantidad = document.getElementById("cant");
    let boton1 = document.getElementById("boton1");
    let boton2 = document.getElementById("boton2");

    importe?.classList.add("d-none");
    cantidad?.classList.remove("d-none");
    boton1?.classList.remove("fondoGris");
    boton1?.classList.add("fondoRojo");
    boton2?.classList.remove("fondoRojo");
    boton2?.classList.add("fondoGris");
  }
  mostrarImporte(){
    let importe = document.getElementById("importe");
    let cantidad = document.getElementById("cant");
    let boton1 = document.getElementById("boton1");
    let boton2 = document.getElementById("boton2");
    importe?.classList.remove("d-none");
    cantidad?.classList.add("d-none");
    boton2?.classList.remove("fondoGris");
    boton2?.classList.add("fondoRojo");
    boton1?.classList.remove("fondoRojo");
    boton1?.classList.add("fondoGris");
  }

}
