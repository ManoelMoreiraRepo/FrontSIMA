import { Component } from '@angular/core';
import { FiltroService } from 'src/app/service/filtro-service';
import { UsuarioService } from 'src/app/service/usuario-service';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
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
    username:'',
    password:'',
    email:'',
    role:''
  }
  constructor(private filtroService : FiltroService , private usuarioService : UsuarioService , private mensajero : ToastrService){

  }

  ngOnInit(){
    this.usuarioService.getUsuarios().subscribe(resp =>{
      this.usuarios = resp;
    });
  }

  editarUsuario(id:any){
    this.usuarioEditable.id = id;
    if(id == 0){
      this.usuarioEditable.id = 0;
      this.usuarioEditable.username = '';
      this.usuarioEditable.email = '';
      this.usuarioEditable.role = 'ROLE_USER';
      this.filtroService.openModal("modalEditarUsuario");
    }else{
      this.usuarioService.getUsuario(id).subscribe(resp => {
        this.usuarioEditable.id=resp.idUsuario;
        this.usuarioEditable.username = resp.nombreUsuario;
        this.usuarioEditable.email = resp.correoUsuario;
        this.usuarioEditable.role = resp.roles[0].name;
        this.filtroService.openModal("modalEditarUsuario");
      });
    }
    
    
  }

  cerrarModal(){
    this.filtroService.closeModal("modalEditarUsuario");
  }

  getJsonUsuario(){
    return {
      id : this.usuarioEditable.id,
      username : this.usuarioEditable.username,
      password : this.usuarioEditable.password,
      email : this.usuarioEditable.email,
      role : [
        this.usuarioEditable.role
      ]
    }
  }

  guardarUsuario(){
    this.usuarioService.guardarUsuario(this.getJsonUsuario()).subscribe((resp:any)=>{
      this.cerrarModal();
      this.mensajero.success(resp.message);
      setTimeout(() => {
        location.reload();
      }, 1000);
    } ,
    error =>{
      console.log(error);
      this.mensajero.error(error.error.mensaje);
    })
  }

}
