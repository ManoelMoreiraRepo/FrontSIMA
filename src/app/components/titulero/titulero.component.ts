import { Component } from '@angular/core';
import { titulos } from 'src/app/constantes';
@Component({
  selector: 'app-titulero',
  templateUrl: './titulero.component.html',
  styleUrls: ['./titulero.component.css']
})
export class TituleroComponent {
  titulos = titulos;
}
