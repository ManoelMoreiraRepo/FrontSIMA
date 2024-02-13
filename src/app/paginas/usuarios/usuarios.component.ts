import { Component } from '@angular/core';
import { FiltroService } from 'src/app/service/filtro-service';
import { UsuarioService } from 'src/app/service/usuario-service';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  urlImagen : string = "./assets/img/Ellipse 99.png";
  faPencil = faPencil;
  usuarios : any;
  usuarioEditable : any = {
    id:0,
    usuario:'',
    contrasena:'',
    correo:'',
    rol:''
  }
  constructor(private filtroService : FiltroService , private usuarioService : UsuarioService){

  }

  ngOnInit(){
    this.usuarioService.getUsuarios().subscribe(resp =>{
      this.usuarios = resp;
      console.log(this.usuarios);
    });
  }

  editarUsuario(id:any){
    this.usuarioEditable.id = id;
    this.usuarioService.getUsuario(id).subscribe(resp => {
      console.log(resp);
      this.filtroService.openModal("modalEditarUsuario");
    });
    
  }

  cerrarModal(){
    this.filtroService.closeModal("modalEditarUsuario");
  }

  guardarUsuario(){

  }

}
