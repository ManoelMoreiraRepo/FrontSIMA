import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  @Input() lista : any;

  // lista = [
  //   {
  //     titulo:"GRUPO SIMA",
  //     descrip:"NOMINA ACTIVA",
  //     cant:33
  //   },
  //   {
  //     titulo:"LA BIZANTINA",
  //     descrip:"NOMINA ACTIVA",
  //     cant:245
  //   },
  //   {
  //     titulo:"EDENOR",
  //     descrip:"NOMINA ACTIVA",
  //     cant:451
  //   },
  //   {
  //     titulo:"GLOBAL",
  //     descrip:"NOMINA ACTIVA",
  //     cant:471
  //   },
  //   {
  //     titulo:"AEROPUERTOS",
  //     descrip:"NOMINA ACTIVA",
  //     cant:1640
  //   },
  //   {
  //     titulo:"ECOKLIN",
  //     descrip:"NOMINA ACTIVA",
  //     cant:22
  //   },
  // ];
}
