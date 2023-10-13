import { Component } from '@angular/core';
import { menuAdmin } from 'src/app/constantes';

@Component({
  selector: 'app-adminmain',
  templateUrl: './adminmain.component.html',
  styleUrls: ['./adminmain.component.css']
})
export class AdminmainComponent {
  lista = menuAdmin;
}
