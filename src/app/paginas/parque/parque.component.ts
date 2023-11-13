import { Component } from '@angular/core';

@Component({
  selector: 'app-parque',
  templateUrl: './parque.component.html',
  styleUrls: ['./parque.component.css']
})
export class ParqueComponent {

  urlImagen : string = "./assets/img/dpa.png";
  selectedFile:any;

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


  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
    
  }

}
