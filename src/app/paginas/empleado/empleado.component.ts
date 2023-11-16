import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaEmpleado } from 'src/app/model/PersonaEmpleado.model';
import { PersonaServiceTsServiceService } from 'src/app/service/persona-service-ts-service.service';
import { ApiResponse } from 'src/app/model/ApiResponse';
import { ToastrService } from 'ngx-toastr';
import { IMAGEN_DEFAULT } from 'src/app/constantes';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {

  empleado: PersonaEmpleado[] = [];
  textoDeInput: string = "";
  gerencia: any = "";
  paginable:any;
  alldata:any
  ordenado:string ='legajoEmpleado';
  orden:string = 'ASC';
  paginaActual = 1;
  imagenDefault = IMAGEN_DEFAULT;
  constructor(private router:Router,private activatedRouter: ActivatedRoute, private empleadoS: PersonaServiceTsServiceService , private mensajero : ToastrService) { }

  ngOnInit(): void {
    var params = new URLSearchParams(window.location.search);
    let gerenciaRecibida =  params.get('gerencia');
    console.log(gerenciaRecibida);
    if(gerenciaRecibida != undefined){
      (<HTMLInputElement>document.getElementById("gerencia")).value = gerenciaRecibida;
      this.gerencia = gerenciaRecibida;
    }else{
      (<HTMLInputElement>document.getElementById("gerencia")).value = '';
    }
    this.empleadoS.buscar("" , this.gerencia , 0).subscribe(data => {
      this.empleado = data.content
      this.paginable = data.pageable;
      this.alldata = data;
      this.armarUrlsFotos(this.empleado);
      // console.log(data);
    });
  }

  setImagenReal(obj:PersonaEmpleado){
    obj.foto = `../../../assets/img/perfil/PIC${obj.dniempleado}.jpg`;
  }

  setImagenDefualt( obj :PersonaEmpleado){
    obj.foto = IMAGEN_DEFAULT;
  }

  armarUrlsFotos(array:any){
    for(let item of array){
      this.setImagenReal(item);
    }
  }

  cargarcliente(page:any = 0): void {
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
    this.gerencia =  (<HTMLInputElement>document.getElementById("gerencia")).value;
    this.empleadoS.buscar(this.textoDeInput.trim() ,this.gerencia ,pagina , this.ordenado , this.orden).subscribe(data => {
      this.empleado = data.content
      this.paginable = data.pageable;
      this.alldata = data;
      this.armarUrlsFotos(this.empleado);
       console.log(data.content);
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
