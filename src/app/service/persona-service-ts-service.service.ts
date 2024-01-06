import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaEmpleado } from '../model/PersonaEmpleado.model';
import { ApiResponse } from '../model/ApiResponse';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class PersonaServiceTsServiceService {
  URL = `${this.environment.URL_API}/Empleado/`;
  options = {
    withCredentials: true
  };
  constructor(private httpClient: HttpClient , 
    @Inject('ENVIRONMENT') private environment: any,
    private mensajero : ToastrService) { }

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
 
  public buscar(textoDeInput: string , gerencia : string = '' , pagina :any = 0 , ordenado = 'legajoEmpleado' , orden ='ASC'): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(this.URL + `search?nombreEmpleado=${textoDeInput}&&page=${pagina}&&ordenado=${ordenado}&&orden=${orden}&&gerencia=${gerencia}` , this.options);
  }

  public buscarFiltro(obj:any): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(this.URL + `buscar` , obj , this.options);
  }

  public getCantidadPorGerencia():Observable<any>{
    return this.httpClient.get(this.URL + "cantidadNominaGerencia" , this.options);
  }
  public getCantidadPorEmpresa():Observable<any>{
    return this.httpClient.get(this.URL + "cantidadNominaEmpresa" , this.options);
  }
  public getCantidadPorSindicato():Observable<any>{
    return this.httpClient.get(this.URL + "cantidadNominaSindicato" , this.options);
  }

  public getGrilla(mes:any,anio:any,idEmpleado=0):Observable<any>{
    return this.httpClient.get(this.URL + `grilla?mes=${mes}&&anio=${anio}&&id=${idEmpleado}` , this.options);
  }

  public getUrlImagen(nombre:string){
    return `${this.environment.URL_API}/Empleado/imagen/${nombre}`;
  }

  public subirImagen(nombre:string , archivo:any) {
    this.httpClient.post(`${this.environment.URL_API}/Empleado/imagen/${nombre}`, archivo ,  { responseType: 'text' , withCredentials: true,}).subscribe(
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
