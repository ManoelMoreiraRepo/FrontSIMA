import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth-service';
import { OfertaService } from 'src/app/service/oferta-service';
import { getLogoByGerencia } from 'src/app/utils';
import { ImpotacionService } from 'src/app/service/importacion-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bolsaadmin',
  templateUrl: './bolsaadmin.component.html',
  styleUrls: ['./bolsaadmin.component.css']
})
export class BolsaadminComponent {
  constructor(private authService : AuthService , private ofertaService : OfertaService , private importacionService : ImpotacionService , private router: Router){}

  esAdmin = this.authService.getRole()!='ROLE_USER';
  urlImagen : string = "./assets/img/Ellipse 99.png";
  urlImagenPostu:string = "./assets/img/postu.png";
  lista : any = [ ]
  paginable:any;
  alldata:any
  ordenado:string ='codigo';
  orden:string = 'ASC';
  paginaActual = 0;

  ngOnInit() :void{
    this.ofertaService.listar().subscribe((resp)=>{
      this.lista = resp.content;
    })
  }

  navigateToDestination(destination: string) {
    this.router.navigate([destination]);
  }

  onBuscar(pagina = 0) {
    if(this.orden ==='ASC'){
      this.orden = 'DESC';
    }else{
      this.orden = 'ASC';
    }
    this.paginaActual = pagina;
    this.ofertaService.listar(pagina , this.ordenado , this.orden).subscribe(data => {
      this.lista = data.content
      this.paginable = data.pageable;
      this.alldata = data;
      console.log(data);
    });
  }

  ordenColumna(ordenado:string){
    this.ordenado = ordenado;
    this.onBuscar(this.paginaActual);
  }

  getLogo(gerencia:string){
    return getLogoByGerencia(gerencia);
  }

}
