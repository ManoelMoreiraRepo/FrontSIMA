import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IMAGEN_DEFAULT } from 'src/app/constantes';
import { PersonaEmpleado } from 'src/app/model/PersonaEmpleado.model';
import { PersonaServiceTsServiceService } from 'src/app/service/persona-service-ts-service.service';

@Component({
  selector: 'app-editempleado',
  templateUrl: './editempleado.component.html',
  styleUrls: ['./editempleado.component.css']
})
export class EditempleadoComponent {

  empleado: PersonaEmpleado= new PersonaEmpleado(' ', ' ', ' ', ' ', ' ',new Date(),new Date(), ' ', ' ',0, ' ', ' ', ' ', ' ');
  turno = ['Mañana', 'Tarde'];
  estado = ['Activo', 'Inactivo'];
  objetivo =['EZEIZA','AEROPARQUE','CORDOBA'];
  cargo= ['Vigilador','Vig./Op. Rx., RRHH','Vig./Aux de Turno','SUPERVISOR','PAÑOL',
   'Vig./Brigadista'];
  imagenURL = '';
  imagenSeleccionada : any;
  constructor(
    private router:Router,
    private activatedRouter: ActivatedRoute, 
    private empleadoS: PersonaServiceTsServiceService,
    private mensajero : ToastrService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    // console.log("entro");
    this.empleadoS.detail(id).subscribe(
      data => {
        this.empleado = data;
        this.imagenURL = this.empleadoS.getUrlImagen(`${this.empleado.dniempleado}.jpg`);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    this.empleadoS.actualizar(id, this.empleado).subscribe(
      data => {
        console.log("vamos a ver");
        // this.clientesService = data;
        alert('Cliente Modificado');
        this.router.navigate(['empleado']);
      }
    )
  }

  main(){
    this.router.navigate(['/main'])
  }
  login(){
    this.router.navigate(['/login'])
  }


  cargarImagenPorDefecto() {
    this.imagenURL = this.empleadoS.getUrlImagen(IMAGEN_DEFAULT);
  }

  onFileChange(event: any) {
    this.imagenSeleccionada = event.target.files[0];
    console.log(this.imagenSeleccionada);
    if(this.imagenSeleccionada != undefined){
      if(this.imagenSeleccionada.type !== "image/jpeg"){
        this.mensajero.error("Solo estan permitdas imagenes en formato jpg.");
        setTimeout(() => {
          location.reload();
        }, 2000);
      }else{
        this.subirArchivo();
      }
    }
   // this.subirArchivoNomina();
  }


  subirArchivo(){
    const formData = new FormData();
    if(!this.imagenSeleccionada){
      return;
    }

    formData.append('file', this.imagenSeleccionada);
    this.empleadoS.subirImagen(this.empleado.dniempleado+'.jpg',formData);
    setTimeout(() => {
     location.reload();
    }, 2000);
  }

}
