import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  nuevaCuenta : boolean = false;

  cuenta={
    nombre:'',
    apellido:'',
    dni:'',
    email:''
  }

  constructor( private authService: AuthService , private mensajero : ToastrService){
    this.authService.logout();
  }
 

  main = async() => {
    // console.log(this.username);
    // console.log(this.password);
    await this.authService.procesarUsuario(this.username, this.password);
  }

  enviarMail(){
    for(let value of Object.values(this.cuenta)){
      if(value == undefined || value == null || value.trim() == ''){
        this.mensajero.info("No puede enviar campos vacios.");
        return;
      }
    }
    this.authService.sendEmail(this.cuenta).subscribe(
      {
        next : resp => {
          this.mensajero.success(resp.body.message);
          this.nuevaCuenta = false;
        },
        error : resp => {
          console.log(resp);
          this.mensajero.error(resp.error.message);
        }
    })


  }

}
