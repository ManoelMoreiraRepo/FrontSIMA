import { Component } from '@angular/core';
import { DpaService } from 'src/app/service/dpa-service';
import { ImpotacionService } from 'src/app/service/importacion-service';

@Component({
  selector: 'app-equipamientos',
  templateUrl: './equipamientos.component.html',
  styleUrls: ['./equipamientos.component.css']
})
export class EquipamientosComponent {
  
  objeto:any=[
    ["","GRUPO SIMA","GRUPO SIMA","GRUPO SIMA","GRUPO SIMA","GRUPO SIMA","GRUPO SIMA"],
    ["SILLAS DE RUEDA",33,33,33,33,33,33 ],
    ["SILLAS DE RUEDA",33,33,33,33,33,33 ],
    ["SILLAS DE RUEDA",33,33,33,33,33,33 ],
    ["SILLAS DE RUEDA",33,33,33,33,33,33 ],
    ["SILLAS DE RUEDA",33,33,33,33,33,33 ],
    ["SILLAS DE RUEDA",33,33,33,33,33,33 ],
  ]

    
  
  constructor(private dpaService : DpaService , private importacionService : ImpotacionService ){}
  
}
