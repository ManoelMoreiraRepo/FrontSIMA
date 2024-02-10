import { Component  , EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { titulos } from 'src/app/constantes';
import { AuthService } from 'src/app/service/auth-service';
@Component({
  selector: 'app-titulero',
  templateUrl: './titulero.component.html',
  styleUrls: ['./titulero.component.css']
})
export class TituleroComponent {
  titulos = titulos;
  @Input() indice : any;
  @Input() tititulosExternos : any;
  @Output() cambioRuta = new EventEmitter<string>();

  constructor(private router: Router , private authService : AuthService){}

  ngOnInit(){
    if(this.tititulosExternos){
      this.titulos=this.tititulosExternos;
    }else{
      if(!this.authService.isModerador()){
        this.titulos = titulos.filter(titulo => titulo.url !== "/logsimportacion");
      }
    }

    
  }

  navigateToDestination(destination: string) {
    if(this.tititulosExternos != undefined){
      this.cambioRuta.emit(destination);
    }else{
      this.router.navigate([destination]);
    }
    
  }

}
