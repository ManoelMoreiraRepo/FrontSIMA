import { Inject, Injectable } from "@angular/core";
import { URL_API } from "../constantes";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ApiResponse } from "../model/ApiResponse";
import { Observable } from "rxjs";
import { ApiMensaje } from "../model/ApiMensaje";

@Injectable({
    providedIn: 'root'
})
export class OfertaService{
    URL = `${this.environment.URL_API}/oferta/`;
    options = {
        withCredentials: true
      };
    constructor(private httpClient: HttpClient, private router: Router, private mensajero: ToastrService , @Inject('ENVIRONMENT') private environment: any) {
    }

    public listar(pagina :any = 0 , ordenado = 'codigo' , orden ='ASC'): Observable<ApiResponse> {
        return this.httpClient.get<ApiResponse>(this.URL + `listar?page=${pagina}&&ordenado=${ordenado}&&orden=${orden}` , this.options);
    }

    public getOferta(id : number) : Observable<any>{
        return this.httpClient.get(this.URL + `${id}` , this.options); 
    }

    public subir(archivo:any) : Observable<any> {
        return this.httpClient.post(this.URL + `archivo`, archivo ,  { responseType: 'text' , withCredentials: true,});
    }

    public subirPostulacion(obj :any){
        this.httpClient.post<ApiMensaje>(this.URL+'postular' , obj, this.options).subscribe((resp) =>{
            this.mensajero.info(resp.mensaje);
        });
    }
}