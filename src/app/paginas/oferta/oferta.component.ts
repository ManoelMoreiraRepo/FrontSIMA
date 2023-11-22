import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OfertaService } from 'src/app/service/oferta-service';
import { getLogoByGerencia } from 'src/app/utils';
@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent {
  urlImagen : string = "./assets/img/Ellipse 99.png";

  nombreApellido :string = '';
  email :string ='';
  dni :string = '';
  telefono :string = '';
  selectedFile: any;
  idOferta : any;

  oferta :any = {
    // titulo:'VIGILADOR EDENOR SAN JUSTO',
    // codigo:'GLO0001',
    // zona:'San Justo',
    // descripcion:'Estamos en la busqueda de vigiladores con excelente presencia, preferentemente con experiencia comprobable , responsables y con vocacion de servicio para cubrir un nuevo objetivo en la zona de capital federal ,zona norte y zona sur , deberan tener entre 25 y 50 años , poseer amplia disponibilidad horaria para cubir turnos diurnos y/p nocturnos',
    // requisitos:'Edad, desde 25 a 50 años, Experiencia minima de un año, (no excluyente) . Disponibilidad horaria para cubir jornadas rotativas (Excluyente),Titulo Secundario (Excluyente). Resindir en zona Capital o aledaños.',

  }



  constructor(private router : Router, 
    private activatedRouter : ActivatedRoute,
    private mensajero : ToastrService,
    private ofertaService : OfertaService) {
    
  }

  
  

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.idOferta = id;

    this.ofertaService.getOferta(id).subscribe((resp)=>{
      this.oferta = resp;
    })
    
  }

  onFileChange(event : any){
    this.selectedFile = event.target.files[0];
  }

  enviarForm(){
    let postu : { [key: string]: string } = {
      idOferta : this.idOferta,
      nombreApellido : this.nombreApellido,
      email : this.email,
      telefono : this.telefono,
      dni: this.dni,
      archivo:''
    }
    const formData = new FormData();
    if(!this.selectedFile){
      window.scrollTo({top:0,behavior:'smooth'})
      this.mensajero.info("Debe cargar un curriculum.");
      return;
    }
    for (let dato in postu) {
      if (dato != 'archivo' && postu[dato] === '') {
        window.scrollTo({top:0,behavior:'smooth'})
        this.mensajero.error("Todos los datos son obligatorios.");
        return;
      }
    }

    formData.append('file', this.selectedFile);
    this.ofertaService.subir(formData).subscribe((resp)=>{
      postu['archivo'] = resp;
      console.log(resp);
      console.log(postu);
      this.ofertaService.subirPostulacion(postu);
      setTimeout(() => {
        this.router.navigate(['/bolsa']);
      }, 1000);
    },
    (error) => {
      this.mensajero.error("Error al procesar la postulacion.");

      console.log(error);
    });

    

    console.log(postu);
  }

  getLogo(gerencia:string){
    return getLogoByGerencia(gerencia);
  }
  
}
