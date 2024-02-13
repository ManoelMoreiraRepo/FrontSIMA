import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CredencialService } from 'src/app/service/credencial-service';
import { ImpotacionService } from 'src/app/service/importacion-service';
@Component({
  selector: 'app-credenciales',
  templateUrl: './credenciales.component.html',
  styleUrls: ['./credenciales.component.css']
})
export class CredencialesComponent {
  urlImagen : string ='./assets/img/admin/cred.png';
  obs1: Observable<any>;
  anchoPantalla = window.innerWidth;
  anchoMovil = 769;
  constructor(private credencialService : CredencialService , private importacionService : ImpotacionService) {
    this.obs1 = new Observable<any>();
  }

  ngOnInit(){
    this.obs1 =  this.credencialService.getCantidades();
  }

  getTotal(array1:any){
    const initialValue = 0;
    const sumWithInitial = array1.reduce((accumulator : any, currentValue : any) => accumulator + currentValue, initialValue);
    return sumWithInitial;
  }
}
