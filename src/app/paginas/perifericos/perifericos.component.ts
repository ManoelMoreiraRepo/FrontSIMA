import { Component } from '@angular/core';
import { DpaService } from 'src/app/service/dpa-service';
import { ImpotacionService } from 'src/app/service/importacion-service';

@Component({
  selector: 'app-perifericos',
  templateUrl: './perifericos.component.html',
  styleUrls: ['./perifericos.component.css']
})
export class PerifericosComponent {
  objeto:any=[
    ["","GRUPO SIMA","GRUPO SIMA","GRUPO SIMA","GRUPO SIMA","GRUPO SIMA","GRUPO SIMA"],
    ["CELULARES",33,33,33,33,33,33 ],
    ["CELULARES",33,33,33,33,33,33 ],
    ["CELULARES",33,33,33,33,33,33 ],
    ["CELULARES",33,33,33,33,33,33 ],
    ["CELULARES",33,33,33,33,33,33 ],
    ["CELULARES",33,33,33,33,33,33 ],
  ]
  constructor(private dpaService : DpaService , private importacionService : ImpotacionService ){}
}
