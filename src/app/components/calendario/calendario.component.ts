import { Component , Input} from '@angular/core';
import * as moment from 'moment'
import 'moment/locale/es';
import { PersonaServiceTsServiceService } from 'src/app/service/persona-service-ts-service.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
  @Input() idEmpleado:any; 
  week: any = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  ];


  monthSelect: any[] = [];
  dateSelect: any;
  dateValue: any;
  estadoVisible : any = '';
  diasTrabajados : any =[];
  grilla :any;

  constructor(private empleadoS : PersonaServiceTsServiceService) {
    moment.locale('es');
  }

  ngOnInit(): void {
    moment.updateLocale('es' ,{});
    let startDate = moment();
   // startDate = startDate.clone().add(1,"month");
    this.empleadoS.getGrilla(startDate.format('MM') ,startDate.format('YYYY') , this.idEmpleado ).subscribe((resp)=>{
      // console.log(resp);
      this.grilla = resp;
      this.getDaysFromDate(startDate.format('MM'), startDate.format('YYYY'));
      this.diasTrabajados = this.grilla.filter((obj:any)=>(obj.estado == 'MAÑANA' || obj.estado == 'TARDE' || obj.estado == 'NOCHE'));
    });
    
  }

  getDaysFromDate(month:any, year:any) {
    let startDate = moment.utc(`${year}/${month}/01`)
    const endDate = startDate.clone().endOf('month')
    this.dateSelect = startDate;

    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays = Math.round(diffDays);

    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      a = parseInt(a) + 1;
      const dayObject = moment(`${year}-${month}-${a}`);
      // console.log(dayObject);
      const correspondingEntry = this.grilla.find((entry: any) => moment(entry.fecha).isSame(dayObject, 'day'));
      // console.log(correspondingEntry)
      return {
        name: dayObject.format("dddd"),
        value: a,
        indexWeek: dayObject.isoWeekday(),
        estado: correspondingEntry ? correspondingEntry.estado : ""
      };
    });

    this.monthSelect = arrayDays;
  }

  changeMonth(flag:any) {
    if (flag < 0) {
      const prevDate = this.dateSelect.clone().subtract(1, "month");
      this.actualizarGrilla(prevDate.format("MM"), prevDate.format("YYYY"));
    } else {
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.actualizarGrilla(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  clickDay(day:any , estado : any) {
    this.estadoVisible = estado;
    const monthYear = this.dateSelect.format('YYYY-MM')
    const parse = `${monthYear}-${day.value}`
    const objectDate = moment(parse)
    this.dateValue = objectDate;
  }

  actualizarGrilla(month:any, year:any){
    this.empleadoS.getGrilla(month ,year , this.idEmpleado ).subscribe((resp)=>{
       console.log(resp);
      this.grilla = resp;
      this.getDaysFromDate(month, year);
      this.diasTrabajados = this.grilla.filter((obj:any)=>(obj.estado == 'MAÑANA' || obj.estado == 'TARDE' || obj.estado == 'NOCHE'));
    });
  }

  esDiaTrabajado(obj:any){
    return (obj.estado == 'MAÑANA' || obj.estado == 'TARDE' || obj.estado == 'NOCHE');
  }

  getTurnos(){
    let obj = this.diasTrabajados;
    let data = "";
    
    if(obj.length === 0){
      return data;
    }
    const lista = new Set();

    obj.forEach((x:any)=>{lista.add(x.estado)});

    return [...lista].join('-');
  }
}
