export class Indumentaria{
     
    id: number;
    
    familia:string;
    nombreIndumentaria:string;
    talle:string;
    fechaUltimaEntregaIndumentaria:Date;
    fechaProximaEntregaIndumentaria:Date;
    codigo:string;
    modeloIndumentaria:string;

    constructor(id:number,
        familia:string, nombreIndumentaria:string, talle:string,
        fechaUltimaEntregaIndumentaria:Date,fechaProximaEntregaIndumentaria:Date, codigo:string , modeloIndumentaria:string)
        { 
          this.id = id;
          this.familia=familia;
          this.nombreIndumentaria=nombreIndumentaria;
          this.talle= talle;
          this.fechaUltimaEntregaIndumentaria= fechaUltimaEntregaIndumentaria;
          this.fechaProximaEntregaIndumentaria=fechaProximaEntregaIndumentaria; 
          this.codigo = codigo;
          this.modeloIndumentaria = modeloIndumentaria;
         }


}