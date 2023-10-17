import { Component } from '@angular/core';
import { ImpotacionService } from 'src/app/service/importacion-service';

@Component({
  selector: 'app-rrhh',
  templateUrl: './rrhh.component.html',
  styleUrls: ['./rrhh.component.css']
})
export class RrhhComponent {
  urlImagen : string = "./assets/img/Ellipse 99.png";
  selectedFile: any;
  selectOption: any;
  constructor(private  importacionService :ImpotacionService){

  }
  
  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
    
    this.subirArchivoNomina();
  }

  subirArchivoNomina(){
    const formData = new FormData();
    const empresa = document.querySelector('#empresaSelect')as HTMLInputElement;
    if(empresa.value == ""){
      alert("Por favor seleccione la empresa.");
      return;
    }

    if(!this.selectedFile){
      alert("Por favor seleccione el archivo.");
      return;
    }

    formData.append('file', this.selectedFile);
    formData.append("empresa", empresa.value);
    this.importacionService.subir(formData);
  }

}
