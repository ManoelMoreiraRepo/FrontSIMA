import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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



  oferta :any = {
    titulo:'VIGILADOR EDENOR SAN JUSTO',
    codigo:'GLO0001',
    zona:'San Justo',
    descripcion:'Estamos en la busqueda de vigiladores con excelente presencia, preferentemente con experiencia comprobable , responsables y con vocacion de servicio para cubrir un nuevo objetivo en la zona de capital federal ,zona norte y zona sur , deberan tener entre 25 y 50 años , poseer amplia disponibilidad horaria para cubir turnos diurnos y/p nocturnos',
    requisitos:'Edad, desde 25 a 50 años, Experiencia minima de un año, (no excluyente) . Disponibilidad horaria para cubir jornadas rotativas (Excluyente),Titulo Secundario (Excluyente). Resindir en zona Capital o aledaños.',

  }



  constructor(private router : Router, 
    private activatedRouter : ActivatedRoute,
    private mensajero : ToastrService) {
    
  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    console.log(id);
    
  }

  onFileChange($event : any){

  }

  enviarForm(){
    let postu : { [key: string]: string } = {
      nombreApellido : this.nombreApellido,
      email : this.email,
      telefono : this.telefono,
      dni: this.dni
    }

    for (let dato in postu) {
      if (postu[dato] === '') {
        window.scrollTo({top:0,behavior:'smooth'})
        this.mensajero.error("Todos los datos son obligatorios.");
        return;
      }
    }
    console.log(postu);
  }
  
}
