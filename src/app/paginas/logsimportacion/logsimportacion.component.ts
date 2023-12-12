import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ImpotacionService } from 'src/app/service/importacion-service';


declare var $: any;
@Component({
  selector: 'app-logsimportacion',
  templateUrl: './logsimportacion.component.html',
  styleUrls: ['./logsimportacion.component.css']
})
export class LogsimportacionComponent {

  urlImagen : string = "./assets/img/Ellipse 99.png";
  lista : any;
  observacion:any = {
    texto:''
  }

  URL_API = this.environment.URL_API;

  constructor(private importacionService : ImpotacionService , @Inject('ENVIRONMENT') private environment: any) {
  }

  ngOnInit(){
    this.importacionService.getTodosLogs().subscribe(resp =>{
      this.lista = resp;
      this.completarURlDescarga(this.lista);
    });
    console.log(this.lista);
  }

  abrirObservaciones(id:any){
   let obj = this.lista.find( (e:any) =>e.id==id);
   this.observacion.texto = obj.observaciones;
   this.openModal("#observaciones");
   console.log(id); 
  }

  openModal(id:string) {
    $(id).modal('show');
  }

  closeModal(id:string){
    $(id).modal('hide');
  }
  
  completarURlDescarga(lista: any) {
    lista.forEach((element:any) => {
      element.url = `${this.environment.URL_API}/importacion/descargar/${element.archivo}`;
    });
  }
  
}


