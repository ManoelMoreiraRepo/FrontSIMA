import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { PersonaEmpleado } from 'src/app/model/PersonaEmpleado.model';
import { PersonaServiceTsServiceService } from 'src/app/service/persona-service-ts-service.service';
import { ApiResponse } from 'src/app/model/ApiResponse';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {

  empleado: PersonaEmpleado[] = [];
  textoDeInput: string = "";

  constructor(private router:Router, private empleadoS: PersonaServiceTsServiceService) { }

  ngOnInit(): void {
    this.empleadoS.traer().subscribe(data => {this.empleado = data.content});
  }

  cargarcliente(): void {
    this.empleadoS.traer().subscribe((data: ApiResponse) => {
      this.empleado = data.content;
    });
  }

  cargarclientebusqueda(data: PersonaEmpleado[]) {
    this.empleado = data;
  }

  onBuscar() {
    if (this.textoDeInput.trim() === "" || this.textoDeInput.trim() === null) {
      alert('Debe ingresar un nombre valido');
    }
    else {
      console.log("a ver que recibe del imput   " + this.textoDeInput);
      this.empleadoS.buscar(this.textoDeInput).subscribe({
        next: (data: PersonaEmpleado[]) => {
          console.log("lo que trae del back "+ data)
          data.length === 0 ? alert(' No se encontro el Empleado') : this.cargarclientebusqueda(data);
        }
      })
    }
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

}
