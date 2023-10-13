import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaEmpleado } from 'src/app/model/PersonaEmpleado.model';
import { PersonaServiceTsServiceService } from 'src/app/service/persona-service-ts-service.service';

@Component({
  selector: 'app-nuevoempleado',
  templateUrl: './nuevoempleado.component.html',
  styleUrls: ['./nuevoempleado.component.css']
})
export class NuevoempleadoComponent {

  estadoEmpleado:string=" ";
  dniempleado: string=" ";
  nombreEmpleado: string=" ";
  apellidoEmpleado: string=" ";
  legajoEmpleado:string=" ";
  fechaNascimentoEmpleado: Date= new Date();
  fechaAltaEmpleado: Date=new Date();
  objetivoEmpleado: string=" ";
  turnoEmpleado: string=" ";
  telefonoEmpleado:number=0;
  cargoEmpleado:string=" ";
  emailEmpleado:string=" ";
  direccionEmpleado: string=" ";
  codigoPostalEmpleado: string=" ";
  turno = ['Mañana', 'Tarde'];
  estado = ['Activo', 'Inactivo'];
  objetivo =['EZEIZA','AEROPARQUE','CORDOBA'];
  cargo= ['Vigilador','Vig./Op. Rx., RRHH','Vig./Aux de Turno','SUPERVISOR','PAÑOL',
   'Vig./Brigadista'];
  contacto: FormGroup | undefined;
  submitted = false;
	title = 'Como Limitar Rangos de Fecha en un Calendario con Angular';
  ahora: any;
	deshabilitar: any; 
  fingreso: string="";
  falta: string="";
  formBuilder: any;
  seleccion:any;



  
  constructor(private router:Router,
    private activatedRouter: ActivatedRoute,
    private empleadoS: PersonaServiceTsServiceService) { }

  ngOnInit(): void {

    const datePite = new DatePipe('en-Us')
		this.ahora = datePite.transform(new Date(), 'yyyy-MM-dd')
   
  }

  cambioFecha() {
		this.deshabilitar = this.fingreso
	}

  onCreate(): void {
    const VEmpleado = new PersonaEmpleado(this.estadoEmpleado, this.dniempleado, this.nombreEmpleado,
      this.apellidoEmpleado, this.legajoEmpleado, this. fechaNascimentoEmpleado, 
      this.fechaAltaEmpleado, this.objetivoEmpleado, this. turnoEmpleado,  
      this.telefonoEmpleado, this.cargoEmpleado, this.emailEmpleado,
      this.direccionEmpleado, this.codigoPostalEmpleado);


    this.empleadoS.create(VEmpleado).subscribe((res) =>
      console.log(res)
      
    )
    alert('Cliente agregado');
    this.router.navigate(['empleado']);
  }

  main(){
    this.router.navigate(['/main'])
  }

}
