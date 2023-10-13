export class Indumentaria{
     
    idIdumentaria?: number;
    
    tipoIndumentaria:string;
    nombreIndumentaria:string;
    talleIndumentaria:string;
    fechaUltimaEntregaIndumentaria:Date;
    fechaProximaEntregaIndumentaria:Date;

    constructor(
        tipoIndumentaria:string, nombreIndumentaria:string, talleIndumentaria:string,
        fechaUltimaEntregaIndumentaria:Date,fechaProximaEntregaIndumentaria:Date )
        {
          this.tipoIndumentaria=tipoIndumentaria;
          this.nombreIndumentaria=nombreIndumentaria;
          this.talleIndumentaria= talleIndumentaria;
          this. fechaUltimaEntregaIndumentaria= fechaUltimaEntregaIndumentaria;
          this.fechaProximaEntregaIndumentaria=fechaProximaEntregaIndumentaria; 
         }


}