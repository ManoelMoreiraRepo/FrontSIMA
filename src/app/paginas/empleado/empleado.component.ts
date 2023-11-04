import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaEmpleado } from 'src/app/model/PersonaEmpleado.model';
import { PersonaServiceTsServiceService } from 'src/app/service/persona-service-ts-service.service';
import { ApiResponse } from 'src/app/model/ApiResponse';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {

  empleado: PersonaEmpleado[] = [];
  textoDeInput: string = "";
  paginable:any;
  alldata:any
  ordenado:string ='legajoEmpleado';
  orden:string = 'ASC';
  paginaActual = 1;
  constructor(private router:Router, private empleadoS: PersonaServiceTsServiceService , private mensajero : ToastrService) { }

  ngOnInit(): void {
    this.empleadoS.buscar("" , 1).subscribe(data => {
      this.empleado = data.content
      this.paginable = data.pageable;
      this.alldata = data;
      // console.log(data);
    });
  }

  cargarcliente(page:any = 1): void {
    this.empleadoS.traer(page).subscribe((data: ApiResponse) => {
      this.empleado = data.content;
    });
  }

  cargarclientebusqueda(data: PersonaEmpleado[]) {
    this.empleado = data;
  }

  onBuscar(pagina = 0) {
    if(this.orden ==='ASC'){
      this.orden = 'DESC';
    }else{
      this.orden = 'ASC';
    }
    this.paginaActual = pagina;
    this.empleadoS.buscar(this.textoDeInput.trim() , pagina , this.ordenado , this.orden).subscribe(data => {
      this.empleado = data.content
      this.paginable = data.pageable;
      this.alldata = data;
      // console.log(data);
    });
  }

  ordenColumna(ordenado:string){
    this.ordenado = ordenado;
    this.onBuscar(this.paginaActual);
  }

  borrar(id?: number) {
    console.log("a ver que recibe" +id);
    if (id != undefined) {
      console.log("entro");
      this.empleadoS.borrar(id).subscribe({
        next: () => {
          alert('se eliminó correctamente');
          this.cargarcliente();
        },
        error: (err) => {
          console.log(err);
          alert('Error, No se pude eliminar el empleado 1');
        }
      });
    }
    else{
      alert('Error, algo pasa con el id');
    }
  }

  informacionempleado(){
    this.router.navigate(['/informacionempleado'])
  }

  
  main(){
    this.router.navigate(['/main'])
  }

  login(){
    this.router.navigate(['/login'])
  }

  recibirPagina(pagina:any){
    console.log(pagina);
    this.onBuscar(pagina);
  }

}
