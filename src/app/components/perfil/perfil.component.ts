import { Component , Input } from '@angular/core';
import { IMAGEN_DEFAULT } from 'src/app/constantes';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  @Input() imagenURL:string = '';
  @Input() empleado:any;

  cargarImagenPorDefecto() {
    this.imagenURL = IMAGEN_DEFAULT;
  }
}
