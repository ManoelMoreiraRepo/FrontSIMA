import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DpaService {

  URL = `${this.environment.URL_API}/dpa/`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };

  constructor(private httpClient: HttpClient, private mensajero: ToastrService , @Inject('ENVIRONMENT') private environment: any) {
  }

  public getEstadistica(): Observable<any> {
    
    return this.httpClient.get(this.URL + "estadistica", this.httpOptions);
  }

  public getCantidadActivos(): Observable<any> {
    return this.httpClient.get(this.URL + "activos", this.httpOptions);
  }
  //Puede ser IMPORTE o LITROS
  public getTotalesPorGerencia(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.URL + 'totales?agrupado=GERENCIA', this.httpOptions);
  }

  public getTotalesPorMovil(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.URL + "totales?agrupado=MOVIL", this.httpOptions);
  }
}