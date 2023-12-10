import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { URL_API } from '../constantes';

@Injectable({
  providedIn: 'root'
})
export class DpaService {

  URL = `${this.environment.URL_API}/dpa/`;
  constructor(private httpClient: HttpClient, private mensajero: ToastrService , @Inject('ENVIRONMENT') private environment: any) {
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