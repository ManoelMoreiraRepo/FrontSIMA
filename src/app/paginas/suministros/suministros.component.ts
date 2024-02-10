import { Component } from '@angular/core';
import { DpaService } from 'src/app/service/dpa-service';
import { FiltroService } from 'src/app/service/filtro-service';
import { ImpotacionService } from 'src/app/service/importacion-service';


@Component({
  selector: 'app-suministros',
  templateUrl: './suministros.component.html',
  styleUrls: ['./suministros.component.css']
})
export class SuministrosComponent {
  // urlImagen : string = "./assets/img/suministros.png";
  objeto:any = {};
  selectedFile:any;
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
  //   },
  //   {
  //     titulo:"INDUMENTARIA",
  //     url:"/indumentaria"
  //   }
  // ]
  totales :any = [
    {
      titulo:"GRUPO SIMA",
      descrip:"",
      cant:"200000"
    },
    {
      titulo:"GRUPO SIMA",
      descrip:"",
      cant:"200000"
    },
    {
      titulo:"GRUPO SIMA",
      descrip:"",
      cant:"200000"
    },
    {
      titulo:"GRUPO SIMA",
      descrip:"",
      cant:"200000"
    },
    {
      titulo:"GRUPO SIMA",
      descrip:"",
      cant:"200000"
    },
    {
      titulo:"GRUPO SIMA",
      descrip:"",
      cant:"200000"
    },
  ];

  constructor(private dpaService : DpaService , private importacionService : ImpotacionService , private filtroService : FiltroService){}

  ngOnInit(){
    this.objeto = {
      type: 'bar',
      data: {
        labels: [
          "ene",
          "feb",
          "mar",
          "abr",
          "may",
          "jun",
          "jul",
          "ago",
          "sep",
          "oct",
          "nov",
          "dic",
        ],
        datasets: [
          {
            label: 'SUMINISTROS - GRUPO SIMA',
            data: [
              6,
              12,
              34,
              182,
              14,
              360,
              6,
              12,
              34,
              182,
              14,
              360
          ],
            backgroundColor: 'rgba(254, 159, 4)',
            borderColor: 'rgba(231, 144, 2)',
            borderWidth: 1,
          },
          {
            label: 'SUMINISTROS - AEROPUERTOS',
            data: [
              24,
              5,
              34,
              69,
              14,
              450,
              6,
              12,
              34,
              63,
              14,
              360
          ],
            backgroundColor:  'rgb(54, 162, 235)',
            borderColor: 'rgba(231, 144, 2)',
            borderWidth: 1,
          }
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        elements: {
          bar: {
            backgroundColor: 'white',
          },
        }
      },
    }
  }
  
  onFileChange(event: any) {
    this.selectedFile = event.target.files[0]; 
    this.subirArchivo();
  }

  subirArchivo(){
    const formData = new FormData();
    if(!this.selectedFile){
      return;
    }

    formData.append('file', this.selectedFile);
    this.importacionService.subir(formData);
    setTimeout(() => {
     location.reload();
    }, 2000);
  }

  

}
