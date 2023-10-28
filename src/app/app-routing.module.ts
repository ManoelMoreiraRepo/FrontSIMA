import { NgModule } from '@angular/core';
import { RoleGuard } from './role.guard';
import { RouterModule, Routes } from '@angular/router';
import { EditempleadoComponent } from './paginas/editempleado/editempleado.component';
import { EmpleadoComponent } from './paginas/empleado/empleado.component';
import { GpsComponent } from './paginas/gps/gps.component';
import { InformacionempleadoComponent } from './paginas/informacionempleado/informacionempleado.component';
import { LoginComponent } from './paginas/login/login.component';
import { MainComponent } from './paginas/main/main.component';
import { NuevoempleadoComponent } from './paginas/nuevoempleado/nuevoempleado.component';
import { AdminmainComponent } from './paginas/adminmain/adminmain.component';
import { EmpleadomainComponent } from './paginas/empleadomain/empleadomain.component';
import { RrhhComponent } from './paginas/rrhh/rrhh.component';
import { BolsaadminComponent } from './paginas/bolsaadmin/bolsaadmin.component';
//import { SistemaComponent } from './components/sistema/sistema.component';

const vistaUser = { roles: ['ROLE_USER' , 'ROLE_MODERATOR']};
const vistaAdmin = { roles: ['ROLE_ADMIN' , 'ROLE_MODERATOR'] };

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component:LoginComponent},
  { path: 'main', component:MainComponent}, //No se va usar.
  { path: 'gps', component:GpsComponent}, //No se va a usar
  { path: 'empleado', component:EmpleadoComponent , canActivate: [RoleGuard], data: vistaAdmin}, 
  { path: 'nuevoempleado', component:NuevoempleadoComponent , canActivate: [RoleGuard], data: vistaAdmin},
  { path: 'editempleado/:id', component:EditempleadoComponent , canActivate: [RoleGuard], data: vistaAdmin},
  { path:'informacionempleado/:id', component:InformacionempleadoComponent , canActivate: [RoleGuard], data: vistaAdmin},
  { path: 'adminmain', component:AdminmainComponent , canActivate: [RoleGuard], data: vistaAdmin },
  { path: 'empleadomain', component:EmpleadomainComponent , canActivate: [RoleGuard], data: vistaUser},
  { path: 'rrhh', component:RrhhComponent , canActivate: [RoleGuard], data: vistaAdmin },
  { path: 'bolsa', component:BolsaadminComponent } //Ambos 
  //{path:'sistema', component:SistemaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
