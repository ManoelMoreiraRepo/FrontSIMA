import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmailCuentaRequest } from 'src/app/model/EmailCuentaRequest';
import { AuthService } from 'src/app/service/auth-service';
import { inHabilitarBoton , HabilitarBoton } from 'src/app/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  [x: string]: any;
  username: string = '';
  password: string = '';

  nuevaCuenta : boolean = false;
 
  cuenta : EmailCuentaRequest={
    nombre:'',
    apellido:'',
    dni:'',
    email:''
  }

  constructor( private authService: AuthService , private mensajero : ToastrService){
    this.authService.logout();
  }
 

  main = async() => {
    if(this.username ==='' || this.password ===''){
      this.mensajero.info("El usuario y contraseña son necesarios.");
      return;
    }
    // console.log(this.username);
    // console.log(this.password);
    await this.authService.procesarUsuario(this.username, this.password, "botonAcceder");
  }

  resetLogin = ()=>{
    this.username = '';
    this.password = '';
  }

  resetEnvioMail = ()=>{
    this.nuevaCuenta = false;
    for (let item of Object.keys(this.cuenta)) {
      const propiedad = item as keyof EmailCuentaRequest;
      this.cuenta[propiedad] = '';
  }
  }

  enviarMail(idBoton:string){
    for(let value of Object.values(this.cuenta)){
      if(value == undefined || value == null || value.trim() == ''){
        this.mensajero.info("No puede enviar campos vacios.");
        return;
      }
    }
    inHabilitarBoton(idBoton);
    this.authService.sendEmail(this.cuenta).subscribe(
      {
        next : resp => {
          this.mensajero.success(resp.body.message);
          this.nuevaCuenta = false;
          HabilitarBoton(idBoton);
        },
        error : resp => {
          console.log(resp);
          this.mensajero.error(resp.error.message);
          HabilitarBoton(idBoton);
        }
    })


  }

}
