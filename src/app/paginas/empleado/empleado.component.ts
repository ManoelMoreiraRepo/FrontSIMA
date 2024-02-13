import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaEmpleado } from 'src/app/model/PersonaEmpleado.model';
import { PersonaServiceTsServiceService } from 'src/app/service/persona-service-ts-service.service';
import { ApiResponse } from 'src/app/model/ApiResponse';
import { ToastrService } from 'ngx-toastr';
import { IMAGEN_DEFAULT } from 'src/app/constantes';
import { esMovil } from 'src/app/utils';
import { FiltroService } from 'src/app/service/filtro-service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  @Input() gerenciaRecibida : any;
  empleado: PersonaEmpleado[] = [];
  textoDeInput: string = "";
  objetivo: any = "";
  gerencia: any = "";
  alldata: any
  ordenado:string ='legajoEmpleado';
  orden:string = 'ASC';
  paginaActual = 1;
  imagenDefault = IMAGEN_DEFAULT;
  esMovil : boolean = esMovil();

  filtroGerencia : any;

  constructor(private router:Router,private activatedRouter: ActivatedRoute, private empleadoS: PersonaServiceTsServiceService , private mensajero : ToastrService , private filtroService : FiltroService) { }

  async ngOnInit(): Promise<void>{
    // var params = new URLSearchParams(new URL(location.href.replaceAll('/#', "")).search);
    // this.gerencia =  params.get('gerencia');

    this.gerencia = this.gerenciaRecibida;
    await this.llenarFiltros();
  }

  procesarDatos() {
    let filtro =  this.getFiltro();
    this.empleadoS.buscarFiltro(filtro).subscribe(apiResponse => {
      this.empleado = apiResponse.content.data
      this.alldata = apiResponse.pageable;
      this.armarUrlsFotos(this.empleado);
    });
  }

  async llenarFiltros() {
    this.filtroService.getFiltroSelect("GERENCIA" , true).subscribe(data =>{
      this.filtroGerencia = data.filtro;
      setTimeout(() => {
        if(this.gerencia != ''){
          this.getSelector('gerencia').value = this.gerencia;
        }else{
          this.getSelector('gerencia').value = data.defecto;
        }
        this.procesarDatos();
      }, 500);
      
    })
  }
  getSelector(id:string) {
    return (<HTMLInputElement>document.getElementById(id));
  }

  setImagenReal(obj:PersonaEmpleado){
    obj.foto =this.empleadoS.getUrlImagen(`${obj.dniempleado}.jpg`);
  }

  setImagenDefualt( obj :PersonaEmpleado){
    obj.foto = this.empleadoS.getUrlImagen(IMAGEN_DEFAULT);
  }

  armarUrlsFotos(array:any){
    for(let item of array){
      this.setImagenReal(item);
    }
  }

  cargarcliente(page:any = 0): void {
    this.empleadoS.traer(page).subscribe((data: ApiResponse) => {
      this.empleado = data.content;
    });
  }

  cargarclientebusqueda(data: PersonaEmpleado[]) {
    this.empleado = data;
  }

  onBuscar(pagina = 0) {
    
    this.paginaActual = pagina;
    this.gerencia =  (<HTMLInputElement>document.getElementById("gerencia")).value;
    let filtro =  this.getFiltro();
    this.empleadoS.buscarFiltro(filtro).subscribe(apiResponse => {
      this.empleado = apiResponse.content.data
      this.alldata = apiResponse.pageable;
      this.armarUrlsFotos(this.empleado);
    });
  }

  getFiltro(){
    return {
      "nombreEmpleado": this.textoDeInput,
      "ordenado": this.ordenado,
      "orden":this.orden,
      "gerencia": this.gerencia,
      "page":this.paginaActual,
      "objetivo": this.objetivo
    }
  }

  ordenColumna(ordenado:string){
    this.ordenado = ordenado;
    if(this.orden ==='ASC'){
      this.orden = 'DESC';
    }else{
      this.orden = 'ASC';
    }
    this.onBuscar(this.paginaActual);
  }

  borrar(id?: number) {
    if (id != undefined) {
      this.empleadoS.borrar(id).subscribe({
        next: () => {
          this.mensajero.success('Se eliminó correctamente');
          this.onBuscar(this.paginaActual);
        },
        error: (err) => {
          console.log(err);
          this.mensajero.error('Error, No se pude eliminar el empleado.');
        }
      });
    }
  }

  informacionempleado(){
    this.router.navigate(['/informacionempleado'])
  }

  
  main(){
    this.router.navigate(['/main'])
  }

  login(){
    this.router.navigate(['/login'])
  }

  recibirPagina(pagina:any){
    this.onBuscar(pagina);
  }

}
