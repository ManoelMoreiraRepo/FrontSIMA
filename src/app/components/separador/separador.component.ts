import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-separador',
  templateUrl: './separador.component.html',
  styleUrls: ['./separador.component.css']
})
export class SeparadorComponent {
  @Input() urlImg : any;
  
}
