import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaEmpleado } from '../model/PersonaEmpleado.model';
import { ApiResponse } from '../model/ApiResponse';
@Injectable({
  providedIn: 'root'
})
export class PersonaServiceTsServiceService {
  URL = 'http://localhost:8080/Empleado/';
  options = {
    withCredentials: true
  };
  constructor(private httpClient: HttpClient) { }

  public traer(): Observable<ApiResponse> {
    
    return this.httpClient.get<ApiResponse>(this.URL + 'traer' , this.options);
  }

   public borrar(id: number): Observable<any> {
     return this.httpClient.delete<any>(this.URL + `borrar/${id}` , this.options);
   }

   public create(persona: PersonaEmpleado): Observable<any> {
     return this.httpClient.post(this.URL + `nuevo`, persona, { responseType: 'text' ,  withCredentials: true });
   }

   public detail(id: number): Observable<PersonaEmpleado> {
     return this.httpClient.get<PersonaEmpleado>(this.URL + `detail/${id}` , this.options);
   }

   public actualizar(id: number, persona: PersonaEmpleado): Observable<any> {
     console.log('onupdate', persona);
     return this.httpClient.put(this.URL + `actualizar/${id}`, persona, { responseType: 'text' ,  withCredentials: true });
   }
 
  public buscar(textoDeInput: string): Observable<PersonaEmpleado[]> {
    return this.httpClient.get<PersonaEmpleado[]>(this.URL + `search?nombreEmpleado=${textoDeInput}` , this.options);
  }

  public getCantidadPorEmpresa():Observable<any>{
    return this.httpClient.get(this.URL + "cantidadNominaEmpresa" , this.options);
  }
  public getCantidadPorSindicato():Observable<any>{
    return this.httpClient.get(this.URL + "cantidadNominaSindicato" , this.options);
  }
}
