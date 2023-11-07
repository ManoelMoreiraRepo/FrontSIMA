import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Indumentaria } from '../model/Indumentaria.model';
import { URL_API } from '../constantes';

@Injectable({
  providedIn: 'root'
})
export class ServiceindumentariaServiceService {

  URL = `${URL_API}/Indumentaria/`;
  constructor(private httpClient: HttpClient) { }

  public traer(): Observable<Indumentaria[]> {
    return this.httpClient.get<Indumentaria[]>(this.URL + 'traer');
  }

   public detail(id: number): Observable<Indumentaria> {
     return this.httpClient.get<Indumentaria>(this.URL + `detail/${id}`);
   }

   public actualizar(id: number, persona: Indumentaria): Observable<any> {
     console.log('onupdate', persona);
     return this.httpClient.put(this.URL + `actualizar/${id}`, persona, { responseType: 'text' });
   }
}
