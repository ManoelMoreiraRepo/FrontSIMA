import { Component ,Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-puntoacceso',
  templateUrl: './puntoacceso.component.html',
  styleUrls: ['./puntoacceso.component.css']
})
export class PuntoaccesoComponent {
  @Input() objeto: any;

  constructor(private router: Router){
    
  }
  navigateToDestination(destination: string) {
    this.router.navigate([destination]);
  }
}
