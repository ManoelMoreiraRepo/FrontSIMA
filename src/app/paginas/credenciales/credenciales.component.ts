import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CredencialService } from 'src/app/service/credencial-service';
import { ImpotacionService } from 'src/app/service/importacion-service';
@Component({
  selector: 'app-credenciales',
  templateUrl: './credenciales.component.html',
  styleUrls: ['./credenciales.component.css']
})
export class CredencialesComponent {
  urlImagen : string ='./assets/img/admin/cred.png';
  obs1: Observable<any>;
  obs2: Observable<any>;
  obs3: Observable<any>;
  obs4: Observable<any>;
  obs5: Observable<any>;
  obs6: Observable<any>;
  obs7: Observable<any>;
  obs8: Observable<any>;
  obs9: Observable<any>;
  obs10: Observable<any>;
  selectedFile: any;
  constructor(private credencialService : CredencialService , private importacionService : ImpotacionService) {
    this.obs1 = new Observable<any>();
    this.obs2 = new Observable<any>();
    this.obs3 = new Observable<any>();
    this.obs4 = new Observable<any>();
    this.obs5 = new Observable<any>();
    this.obs6 = new Observable<any>();
    this.obs7 = new Observable<any>();
    this.obs8 = new Observable<any>();
    this.obs9 = new Observable<any>();
    this.obs10 = new Observable<any>();

    // console.log(credencialService.getCantidades("PROVINCIA" , "G03" , "FISICA"));  
  }

  ngOnInit(){
    this.obs1 =  this.credencialService.getCantidades("CABA" , "G03" , "NOTA");
    this.obs2 =  this.credencialService.getCantidades("CABA" , "G04" , "NOTA");

    this.obs3 =  this.credencialService.getCantidades("CABA" , "G03" , "FISICA");
    this.obs4 =  this.credencialService.getCantidades("CABA" , "G04" , "FISICA");

    this.obs5 =  this.credencialService.getCantidades("PROVINCIA" , "G03" , "NOTA");
    this.obs6 =  this.credencialService.getCantidades("PROVINCIA" , "G04" , "NOTA");

    this.obs7 =  this.credencialService.getCantidades("PROVINCIA" , "G03" , "FISICA");
    this.obs8 =  this.credencialService.getCantidades("PROVINCIA" , "G04" , "FISICA");

    this.obs9 =  this.credencialService.getCantidades("AEP" , "G02" , "NOTA");
    this.obs10 =  this.credencialService.getCantidades("EZE" , "G02" , "NOTA");



    // this.obsProvGlobalFisica.subscribe(
    //   valor => {
    //     console.log('Valor emitido:', valor);
    //   },
    //   error => {
    //     console.error('Error:', error);
    //   },
    //   () => {
    //     console.log('El Observable ha completado.');
    //   }
    // );
  }

  getTotal(array1:any){
    const initialValue = 0;
    const sumWithInitial = array1.reduce((accumulator : any, currentValue : any) => accumulator + currentValue, initialValue);
    return sumWithInitial;
  }

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
    
    this.subirArchivoNomina();
  }

  subirArchivoNomina(){
    const formData = new FormData();
    if(!this.selectedFile){
      return;
    }

    formData.append('file', this.selectedFile);
    this.importacionService.subir(formData);
  }

}
