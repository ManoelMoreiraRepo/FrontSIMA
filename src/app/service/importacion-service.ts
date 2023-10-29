import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})

export class ImpotacionService{
    URL = 'http://localhost:8080/importacion/';
    
    constructor(private httpClient: HttpClient , private mensajero : ToastrService) { }

    public subir(archivo:any) {
        this.httpClient.post(this.URL + `archivo`, archivo ,  { responseType: 'text' , withCredentials: true,}).subscribe(
            (response) => {
              this.mensajero.success(response);
            },
            (error) => {
              this.mensajero.error("Error al cargar el archivo.");
              console.error('Error al cargar el archivo: ', error);
            }
        );
    }
}