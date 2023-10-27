import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor( private authService: AuthService ){
  }
 

  main(){
    console.log(this.username);
    console.log(this.password);
    this.authService.login(this.username, this.password);
    this.authService.procesarUsuario();
    
  }

}
