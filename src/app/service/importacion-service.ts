import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ImpotacionService{
    URL = 'http://localhost:8080/importacion/';
    constructor(private httpClient: HttpClient) { }

    public subir(archivo:any): Observable<any> {
        return this.httpClient.post(this.URL + `nomina`, archivo, { responseType: 'text' });
    }
}