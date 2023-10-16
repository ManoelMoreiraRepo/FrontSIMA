import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Indumentaria } from 'src/app/model/Indumentaria.model';
import { PersonaEmpleado } from 'src/app/model/PersonaEmpleado.model';
import { PersonaServiceTsServiceService } from 'src/app/service/persona-service-ts-service.service';
import { ServiceindumentariaServiceService } from 'src/app/service/serviceindumentaria.service.service';

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

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private empleadoS: PersonaServiceTsServiceService,

    private indumentariaS: ServiceindumentariaServiceService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    
    this.empleadoS.detail(id).subscribe((data) => {
      this.empleado = data;
      console.log(this.empleado);
      this.agruparUniformes(this.empleado.indumentaria)
      console.log(this.uniformes);
      console.log('imprimir DNI ' + this.empleado.dniempleado);
    });

    this.indumentariaS.detail(id).subscribe((dataI) => {
      this.indumentaria = dataI;
    });
  }
  main() {
    this.router.navigate(['/main']);
  }

  agruparUniformes(indumentarias: Array<Indumentaria>) {
    indumentarias.forEach((ind) => {
      let tipoIndumentaria = ind.tipoIndumentaria;
      if (this.uniformes.has(tipoIndumentaria)) {
        let lista = this.uniformes.get(tipoIndumentaria);
        lista?.push(ind);
      }else{
        let lista = [ind];
        this.uniformes.set(tipoIndumentaria,lista)
      }
    });
  }
}
