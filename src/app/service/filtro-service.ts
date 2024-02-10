import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import "select2";
declare var $: any;
@Injectable({
    providedIn: 'root'
})

export class FiltroService{
    URL = `${this.environment.URL_API}/filtro/`;
    constructor(private http: HttpClient, private mensajero: ToastrService , @Inject('ENVIRONMENT') private environment: any) {
    }

    public getFiltroSelect(tipo:string , seleccione : boolean = false) : Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            }),
            withCredentials: true
          };
      
          return this.http.get(this.URL + `select?tipo=${tipo}&seleccione=${seleccione}`, httpOptions);
    }

    public inicializarAutocompletable(id:string , endpoint:string , multiple = false){
      $(id).select2({
          minimumInputLength: 2,
          language: {
            "errorLoading":function(){return"No se pudieron cargar los resultados"},
            "inputTooLong":function(e:any){var t=e.input.length-e.maximum,n="Por favor, elimine "+t+" car";return t==1?n+="ácter":n+="acteres",n},
            "inputTooShort":function(e:any){var t=e.minimum-e.input.length,n="Por favor, introduzca "+t+" car";return t==1?n+="ácter":n+="acteres",n},
            "loadingMore":function(){return"Cargando más resultados…"},
            "maximumSelected":function(e:any){var t="Sólo puede seleccionar "+e.maximum+" elemento";return e.maximum!=1&&(t+="s"),t},
            "searching":function(){return"Buscando…"},
               "noResults": function(){
               return "No se encontraron resultados.";
              }
          },
           escapeMarkup: function (markup:any) {
            return markup;
          },
          multiple: multiple,
          quietMillis: 100,
          maximumSelectionLength: 6,
          placeholder: "Ingrese el dato",
          ajax: {
            url: `${this.environment.URL_API}/filtro/${endpoint}`,
            dataType: 'json',
            crossDomain: true,
            xhrFields: {
                  withCredentials: true
            },
            delay: 250,
            data: function (params:any) {
              return {
              texto: params.term
              };
            },
            processResults: function (data:any,page:any) {
              return {
                results: $.map(data, function (obj:any) {
                  return {
                    id: obj.value,
                    text: obj.vista
                    };
                })
              };
            },
              formatResult: function (option:any) {
                return "<div>" + option.id + "</div>";
              },
              formatSelection: function (option:any) {
                return option.text;
              }
          }
      })
    }
}