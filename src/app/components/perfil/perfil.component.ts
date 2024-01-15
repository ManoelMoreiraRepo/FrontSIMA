import { Component , Input } from '@angular/core';
import { IMAGEN_DEFAULT } from 'src/app/constantes';
import { PersonaServiceTsServiceService } from 'src/app/service/persona-service-ts-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  @Input() imagenURL:string = '';
  @Input() empleado:any;

  constructor(private empleadoS : PersonaServiceTsServiceService){

  }

  cargarImagenPorDefecto() {
    this.imagenURL = this.empleadoS.getUrlImagen(IMAGEN_DEFAULT);
  }
}
