import { NgModule } from '@angular/core';
import { RoleGuard } from './role.guard';
import { RouterModule, Routes } from '@angular/router';
import { EditempleadoComponent } from './paginas/editempleado/editempleado.component';
import { EmpleadoComponent } from './paginas/empleado/empleado.component';
import { InformacionempleadoComponent } from './paginas/informacionempleado/informacionempleado.component';
import { LoginComponent } from './paginas/login/login.component';
import { NuevoempleadoComponent } from './paginas/nuevoempleado/nuevoempleado.component';
import { AdminmainComponent } from './paginas/adminmain/adminmain.component';
import { EmpleadomainComponent } from './paginas/empleadomain/empleadomain.component';
import { RrhhComponent } from './paginas/rrhh/rrhh.component';
import { BolsaadminComponent } from './paginas/bolsaadmin/bolsaadmin.component';
import { CredencialesComponent } from './paginas/credenciales/credenciales.component';
import { OfertaComponent } from './paginas/oferta/oferta.component';
import { ParqueComponent } from './paginas/parque/parque.component';
import { InfraccionesComponent } from './paginas/infracciones/infracciones.component';
import { SuministrosComponent } from './paginas/suministros/suministros.component';
import { PerifericosComponent } from './paginas/perifericos/perifericos.component';
import { EquipamientosComponent } from './paginas/equipamientos/equipamientos.component';
import { LogsimportacionComponent } from './paginas/logsimportacion/logsimportacion.component';
import { IndumentariaComponent } from './paginas/indumentaria/indumentaria.component';
import { DpaComponent } from './paginas/dpa/dpa.component';
import { RrhhprincipalComponent } from './paginas/rrhhprincipal/rrhhprincipal.component';
import { SuministrosPrincipalComponent } from './paginas/suministros-principal/suministros-principal.component';

const vistaUser = { roles: ['ROLE_USER' , 'ROLE_MODERATOR']};
const vistaAdmin = { roles: ['ROLE_ADMIN' , 'ROLE_MODERATOR'] };
const vistaMod = { roles: ['ROLE_MODERATOR'] };


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component:LoginComponent},
  { path: 'rrhh', component:RrhhprincipalComponent , canActivate: [RoleGuard], data: vistaAdmin}, 
  { path: 'nuevoempleado', component:NuevoempleadoComponent , canActivate: [RoleGuard], data: vistaAdmin},
  { path: 'editempleado/:id', component:EditempleadoComponent , canActivate: [RoleGuard], data: vistaAdmin},
  { path:'informacionempleado/:id', component:InformacionempleadoComponent , canActivate: [RoleGuard], data: vistaAdmin},
  { path: 'adminmain', component:AdminmainComponent , canActivate: [RoleGuard], data: vistaAdmin },
  { path: 'empleadomain', component:EmpleadomainComponent , canActivate: [RoleGuard], data: vistaUser},
  { path: 'credenciales', component:CredencialesComponent , canActivate: [RoleGuard], data: vistaAdmin },
  { path: 'oferta/:id', component:OfertaComponent }, //Ambos 
  { path: 'dpa', component:DpaComponent , canActivate: [RoleGuard], data: vistaAdmin },
  { path: 'suministros', component:SuministrosPrincipalComponent , canActivate: [RoleGuard], data: vistaAdmin },
  { path: 'logsimportacion', component:LogsimportacionComponent , canActivate: [RoleGuard], data: vistaMod },
  // { path: 'indumentaria', component:IndumentariaComponent , canActivate: [RoleGuard], data: vistaAdmin },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
