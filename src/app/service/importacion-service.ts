import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ImpotacionService{
    URL = 'http://localhost:8080/importacion/';
    constructor(private httpClient: HttpClient) { }

    public subir(archivo:any) {
        console.log("SREVICIO");
       

        this.httpClient.post(this.URL + `nomina`, archivo ,  { responseType: 'text' }).subscribe(
            (response) => {
              alert(response);
            },
            (error) => {
              console.error('Error al cargar el archivo CSV', error);
            }
        );
        //return this.httpClient.post(this.URL + `nomina`, formData, { responseType: 'text' });
    }
}