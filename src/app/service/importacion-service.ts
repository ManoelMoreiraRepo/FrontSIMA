import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})

export class ImpotacionService{
    URL = `${this.environment.URL_API}/importacion/`;
    constructor(private httpClient: HttpClient , private mensajero : ToastrService , @Inject('ENVIRONMENT') private environment: any) { }

    public subir(archivo:any) {
        this.httpClient.post(this.URL + `archivo`, archivo ,  { responseType: 'text' , withCredentials: true,}).subscribe(
            (response) => {
              try {
                let mensaje = JSON.parse(response).message;
                this.mensajero.info(mensaje);
                setTimeout(() => {
                  location.reload();
                }, 2000);
              } catch (error) {
                this.mensajero.info("Proceso iniciado.");
              }
              
            },
            (error) => {
              if(error.error){
                try {
                  let mensaje = JSON.parse(error.error).message;
                  this.mensajero.info(mensaje);
                } catch (error) {
                }
              }else{
                this.mensajero.error("Error al cargar el archivo.");
                console.error('Error al cargar el archivo: ', error);
              }
              
            }
        );
    }

    public getLog(id:number) : Observable<any>{
      return this.httpClient.get(this.URL + `log?id=${id}` , {withCredentials: true});
    }

    public getTodosLogs() : Observable<any>{
      return this.httpClient.get(this.URL + `logs` , {withCredentials: true});
    }
}