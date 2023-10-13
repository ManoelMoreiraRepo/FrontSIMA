import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.css']
})
export class GpsComponent {
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  empleado(){
    this.router.navigate(['/empleado'])
  }
  main(){
    this.router.navigate(['/main'])
  }
  login(){
    this.router.navigate(['/login'])
  }
}
