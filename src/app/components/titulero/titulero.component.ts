import { Component  , EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { titulosAdmin  , titulosMod} from 'src/app/constantes';
import { AuthService } from 'src/app/service/auth-service';
@Component({
  selector: 'app-titulero',
  templateUrl: './titulero.component.html',
  styleUrls: ['./titulero.component.css']
})
export class TituleroComponent {
  titulos = titulosAdmin;
  @Input() indice : any;
  @Input() tititulosExternos : any;
  @Output() cambioRuta = new EventEmitter<string>();

  constructor(private router: Router , private authService : AuthService){}

  ngOnInit(){
    if(!this.tititulosExternos){
      if(this.authService.isModerador()){
        this.titulos = titulosMod;
      }else if( this.authService.isAdmin()){
        this.titulos = titulosAdmin;
      }
    }else{
      this.titulos=this.tititulosExternos;
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
