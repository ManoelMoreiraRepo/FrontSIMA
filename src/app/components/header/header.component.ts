import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private auth : AuthService , private router: Router){}

  main(){
    this.auth.redireccionMain();
  }

  navigateToDestination(destination: string) {
    this.router.navigate([destination]);
  }

}
