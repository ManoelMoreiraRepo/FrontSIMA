import { Component } from '@angular/core';
@Component({
  selector: 'app-bolsaadmin',
  templateUrl: './bolsaadmin.component.html',
  styleUrls: ['./bolsaadmin.component.css']
})
export class BolsaadminComponent {


  urlImagen : string = "./assets/img/Ellipse 99.png";
  urlImagenPostu:string = "./assets/img/postu.png";
  lista = [ //AGREGAR LOGICA PARA REUTIRLIZAR ESTA PANTALLA DEPENDIENDO DEL USUARIO.
    {
      img:"./assets/img/ecoklinTransparente.png",
      codigo:"1244",
      descripcion: "Operario de Maestranza",
      zona:"Mataderos",
      url:"/postularse?id=1245"
    },
    {
      img:"./assets/img/ecoklinTransparente.png",
      codigo:"1244",
      descripcion: "Operario de Maestranza",
      zona:"Mataderos",
      url:"/postularse?id=1245"
    }
  ]

  onFileChange=(event:any)=>{
    console.log("Subida");
  }
}
