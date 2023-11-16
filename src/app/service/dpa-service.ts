import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { URL_API } from '../constantes';

@Injectable({
  providedIn: 'root'
})
export class DpaService {

  URL = `${URL_API}/dpa/`;
  constructor(private httpClient: HttpClient, private mensajero: ToastrService) {
  }

  public getEstadistica(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };

    return this.httpClient.get(this.URL + "estadistica", httpOptions);
  }

  public getCantidadActivos(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };

    return this.httpClient.get(this.URL + "activos", httpOptions);
  }

}