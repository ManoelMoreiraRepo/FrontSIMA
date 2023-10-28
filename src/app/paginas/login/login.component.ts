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
    this.authService.logout();
  }
 

  main = async() => {
    console.log(this.username);
    console.log(this.password);
    await this.authService.procesarUsuario(this.username, this.password);
  }

}
