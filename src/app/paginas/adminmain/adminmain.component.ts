import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { menuAdmin } from 'src/app/constantes';
import { AuthService } from 'src/app/service/auth-service';

@Component({
  selector: 'app-adminmain',
  templateUrl: './adminmain.component.html',
  styleUrls: ['./adminmain.component.css']
})
export class AdminmainComponent {
  lista = menuAdmin;
  urlSeparador = "./assets/img/gruposima.png";
  
  constructor(private seguridad:AuthService , private router: Router) {
  }
  
  ngOnInit(): void {
    console.log("INIT")
    
  }

  navigateToDestination(destination: string) {
    this.router.navigate([destination]);
  }
}
