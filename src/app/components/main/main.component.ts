import { Component } from '@angular/core';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private router: Router){
  }

  ngOnInit(): void {
  }

  gps(){
    this.router.navigate(['/gps'])
  }

  sistema(){
    this.router.navigate(['/sistema'])
  }

  main(){
    this.router.navigate(['/main'])
  }

  login(){
    this.router.navigate(['/login'])
  }




}
