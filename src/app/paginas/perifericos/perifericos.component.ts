import { Component } from '@angular/core';
import { DpaService } from 'src/app/service/dpa-service';
import { ImpotacionService } from 'src/app/service/importacion-service';

@Component({
  selector: 'app-perifericos',
  templateUrl: './perifericos.component.html',
  styleUrls: ['./perifericos.component.css']
})
export class PerifericosComponent {
  // urlImagen : string = "./assets/img/suministros.png";
  // selectedFile:any;
  // subtitulos = [
  //   {
  //     titulo:"SUMINISTROS",
  //     url:"/suministros"
  //   },
  //   {
  //     titulo:"PERIFERICOS",
  //     url:"/perifericos"
  //   },
  //   {
  //     titulo:"EQUIPAMIENTOS",
  //     url:"/equipamientos"
  //   }
  // ]
  objeto:any=[
    ["","GRUPO SIMA","GRUPO SIMA","GRUPO SIMA","GRUPO SIMA","GRUPO SIMA","GRUPO SIMA"],
    ["CELULARES",33,33,33,33,33,33 ],
    ["CELULARES",33,33,33,33,33,33 ],
    ["CELULARES",33,33,33,33,33,33 ],
    ["CELULARES",33,33,33,33,33,33 ],
    ["CELULARES",33,33,33,33,33,33 ],
    ["CELULARES",33,33,33,33,33,33 ],
  ]

    
  
  constructor(private dpaService : DpaService , private importacionService : ImpotacionService ){}

  // onFileChange(event: any) {
  //   this.selectedFile = event.target.files[0]; 
  //   this.subirArchivo();
  // }

  // subirArchivo(){
  //   const formData = new FormData();
  //   if(!this.selectedFile){
  //     return;
  //   }

  //   formData.append('file', this.selectedFile);
  //   this.importacionService.subir(formData);
  //   setTimeout(() => {
  //    location.reload();
  //   }, 2000);
  // }
}
