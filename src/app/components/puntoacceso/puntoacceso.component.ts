import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-puntoacceso',
  templateUrl: './puntoacceso.component.html',
  styleUrls: ['./puntoacceso.component.css']
})
export class PuntoaccesoComponent {
  @Input() objeto: any;
}
