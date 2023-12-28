import { Component  , Input } from '@angular/core';
import { Router } from '@angular/router';
import { titulos } from 'src/app/constantes';
@Component({
  selector: 'app-titulero',
  templateUrl: './titulero.component.html',
  styleUrls: ['./titulero.component.css']
})
export class TituleroComponent {
  titulos = titulos;
  @Input() indice : any;
  @Input() tititulosExternos : any;

  constructor(private router: Router){}

  ngOnInit(){
    if(this.tititulosExternos){
      this.titulos=this.tititulosExternos;
    }
  }

  navigateToDestination(destination: string) {
    this.router.navigate([destination]);
  }

}
