import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Indumentaria } from 'src/app/model/Indumentaria.model';
import { PersonaEmpleado } from 'src/app/model/PersonaEmpleado.model';
import { PersonaServiceTsServiceService } from 'src/app/service/persona-service-ts-service.service';
import { ServiceindumentariaServiceService } from 'src/app/service/serviceindumentaria.service.service';
import { IMAGEN_DEFAULT } from 'src/app/constantes';

declare var $: any;
@Component({
  selector: 'app-informacionempleado',
  templateUrl: './informacionempleado.component.html',
  styleUrls: ['./informacionempleado.component.css'],
})
export class InformacionempleadoComponent {


  empleado: PersonaEmpleado = new PersonaEmpleado(
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    new Date(),
    new Date(),
    ' ',
    ' ',
    0,
    ' ',
    ' ',
    ' ',
    ' '
  );
  indumentaria: Indumentaria = new Indumentaria(
    ' ',
    ' ',
    ' ',
    new Date(),
    new Date()
  );
  fechahabiles: string = ' ';

  title(title: any) {
    throw new Error('Method not implemented.');
  }

  week: any = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
  ];

  monthSelect: any[] = [];
  dateSelect: any;
  dateValue: any;
  uniformes: Map<string, Array<Indumentaria>>= new Map();

  indexUniforme1 : any = 0;

  indexUniforme2 :any = 1

  idEmpleado :any;

  imagenURL : string = "../../../assets/img/perfil/PIC";

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private empleadoS: PersonaServiceTsServiceService,

    private indumentariaS: ServiceindumentariaServiceService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.idEmpleado=id;
    this.empleadoS.detail(id).subscribe((data) => {
      this.empleado = data;
      this.imagenURL += `${this.empleado.dniempleado}.jpg`;
       console.log(this.empleado);
      // this.agruparUniformes(this.empleado.indumentaria)
      // console.log(this.uniformes);
      // console.log('imprimir DNI ' + this.empleado.dniempleado);
    });


    // this.indumentariaS.detail(id).subscribe((dataI) => {
    //   this.indumentaria = dataI;
    // });
  }

  openModal(id:string) {
    $(id).modal('show');
  }

  closeModal(id:string){
    $(id).modal('hide');
  }

  cargarImagenPorDefecto() {
    this.imagenURL = IMAGEN_DEFAULT;
  }

  main() {
    this.router.navigate(['/main']);
  }

  // agruparUniformes(indumentarias: Array<Indumentaria>) {
  //   indumentarias.forEach((ind) => {
  //     let tipoIndumentaria = ind.tipoIndumentaria;
  //     if (this.uniformes.has(tipoIndumentaria)) {
  //       let lista = this.uniformes.get(tipoIndumentaria);
  //       lista?.push(ind);
  //     }else{
  //       let lista = [ind];
  //       this.uniformes.set(tipoIndumentaria,lista)
  //     }
  //   });
  // }

  getPropiedades(objeto: any): [string, any][] {
    return Object.entries(objeto).filter(([key, value]) => key !== 'nombre');
  }

  uniformesRecibidos = {
    "uniformes": [
      {
        "nombre": "IPO Brigadista",
        "Pantalon": "38",
        "Chomba": "M",
        "Zapatos": "L",
        "Polar": "XL",
        "Campera": "M"
      },
      {
        "nombre": "Profile",
        "Pantalon": "XL",
        "Chomba": "L",
        "Zapatos": "M",
        "Polar": "L",
        "Campera": "XL"
      }
    ]
  }
  


  uniformesData = {
    "uniformes": [
      {
        "nombre": "UNIFORME VIGILADOR GPS HOMBRE/MUJER",
        "items": [
          "CAMISA UNISEX 3 BORDADOS",
          "PANTALON RECTO",
          "CORBATA GPS",
          "CHALECO FLUO Amarillo",
          "CINTA PORTA CREDENCIAL",
          "ZAPATOS DE SEGURIDAD",
          "CAMPERA REFLEX GPS",
          "SORDINA",
          "CINTURON"
        ]
      },
      {
        "nombre": "UNIFORME VIGILADOR GLOBAL HOMBRE/MUJER",
        "items": [
          "CAMISA UNISEX 3 BORDADOS GLOBAL",
          "PANTALON FAJINA",
          "CHALECO FLUO Amarillo",
          "CINTA PORTA CREDENCIAL",
          "CORBATA GLOBAL",
          "ZAPATOS DE SEGURIDAD",
          "POLAR GLOBAL",
          "CAMPERA REFLEX GLOBAL",
          "CINTURON"
        ]
      },
      {
        "nombre": "UNIFORMES PROFILER MUJER",
        "items": [
          "CAMISA DE VESTIR MUJER 3/4",
          "PANTALON VESTIR MUJER",
          "SACOS PROFILERS MUJER",
          "PAÑUELO",
          "CHALECO FLUO Amarillo",
          "CINTA PORTA CREDENCIAL",
          "ZAPATOS DE SEGURIDAD",
          "CAMPERA REFLEX GPS"
        ]
      },
      {
        "nombre": "UNIFORME PROFILER HOMBRE",
        "items": [
          "CAMISA DE VESTIR HOMBRE ML",
          "PANTALON VESTIR HOMBRE",
          "SACOS PROFILERS HOMBRE",
          "CORBATA GPS",
          "CHALECO FLUO Amarillo",
          "CINTA PORTA CREDENCIAL",
          "ZAPATOS DE SEGURIDAD",
          "CAMPERA REFLEX GPS"
        ]
      },
      {
        "nombre": "lpo",
        "items": [
          "CHOMBA BRIGADISTA",
          "PANTALON FAJINA HOMBRE",
          "CHALECO FLUO Amarillo",
          "CINTA PORTA CREDENCIAL",
          "ZAPATOS DE SEGURIDAD",
          "CAMPERA REFLEX GPS",
          "SORDINA & GORRO",
          "CHALECO FLUO Naranja",
          "CINTA PORTA CREDENCIAL",
          "BORCEGOS"
        ]
      }
    ]
  }
  
}
