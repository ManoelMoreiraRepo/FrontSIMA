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

  public traer( page : any = 0): Observable<ApiResponse> {
    
    return this.httpClient.get<ApiResponse>(this.URL + `traer?page=${page}` , this.options);
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
 
  public buscar(textoDeInput: string , pagina :any = 0 , ordenado = 'legajoEmpleado' , orden ='ASC'): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(this.URL + `search?nombreEmpleado=${textoDeInput}&&page=${pagina}&&ordenado=${ordenado}&&orden=${orden}` , this.options);
  }

  public getCantidadPorEmpresa():Observable<any>{
    return this.httpClient.get(this.URL + "cantidadNominaEmpresa" , this.options);
  }
  public getCantidadPorSindicato():Observable<any>{
    return this.httpClient.get(this.URL + "cantidadNominaSindicato" , this.options);
  }
}
