import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth-service';
import { OfertaService } from 'src/app/service/oferta-service';
import { getLogoByGerencia } from 'src/app/utils';
import { ImpotacionService } from 'src/app/service/importacion-service';
@Component({
  selector: 'app-bolsaadmin',
  templateUrl: './bolsaadmin.component.html',
  styleUrls: ['./bolsaadmin.component.css']
})
export class BolsaadminComponent {
  constructor(private authService : AuthService , private ofertaService : OfertaService , private importacionService : ImpotacionService ){}

  esAdmin = this.authService.getRole()!='ROLE_USER';
  urlImagen : string = "./assets/img/Ellipse 99.png";
  urlImagenPostu:string = "./assets/img/postu.png";

  selectedFile:any;
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

  lista : any = [ 
    // {
    //   img:"./assets/img/ecoklinTransparente.png",
    //   codigo:"1244",
    //   titulo: "Operario de Maestranza",
    //   zona:"Mataderos",
    //   id:"1245"
    // },
    // {
    //   img:"./assets/img/ecoklinTransparente.png",
    //   codigo:"1244",
    //   descripcion: "Operario de Maestranza",
    //   zona:"Mataderos",
    //   id:"1245"
    // },
    // {
    //   img:"./assets/img/ecoklinTransparente.png",
    //   codigo:"1244",
    //   descripcion: "Operario de Maestranza",
    //   zona:"Mataderos",
    //   id:"1245"
    // },
    // {
    //   img:"./assets/img/ecoklinTransparente.png",
    //   codigo:"1244",
    //   descripcion: "Operario de Maestranza",
    //   zona:"Mataderos",
    //   id:"1245"
    // },
    // {
    //   img:"./assets/img/ecoklinTransparente.png",
    //   codigo:"1244",
    //   descripcion: "Operario de Maestranza",
    //   zona:"Mataderos",
    //   id:"1245"
    // },
    // {
    //   img:"./assets/img/ecoklinTransparente.png",
    //   codigo:"1244",
    //   descripcion: "Operario de Maestranza",
    //   zona:"Mataderos",
    //   id:"1245"
    // },
    // {
    //   img:"./assets/img/ecoklinTransparente.png",
    //   codigo:"1244",
    //   descripcion: "Operario de Maestranza",
    //   zona:"Mataderos",
    //   id:"1245"
    // },
    // {
    //   img:"./assets/img/ecoklinTransparente.png",
    //   codigo:"1244",
    //   descripcion: "Operario de Maestranza",
    //   zona:"Mataderos",
    //   id:"1245"
    // },
  ]

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
    
    this.subirArchivo();
  }

  subirArchivo(){
    const formData = new FormData();
    if(!this.selectedFile){
      return;
    }

    formData.append('file', this.selectedFile);
    this.importacionService.subir(formData);
    setTimeout(() => {
     location.reload();
    }, 2000);
  }
}
