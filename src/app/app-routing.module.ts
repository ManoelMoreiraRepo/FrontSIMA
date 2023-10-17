import { NgModule } from '@angular/core';
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
//import { SistemaComponent } from './components/sistema/sistema.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component:LoginComponent},
  { path: 'main', component:MainComponent},
  { path: 'gps', component:GpsComponent},
  { path: 'empleado', component:EmpleadoComponent},
  { path: 'nuevoempleado', component:NuevoempleadoComponent},
  { path: 'editempleado/:id', component:EditempleadoComponent},
  {path:'informacionempleado/:id', component:InformacionempleadoComponent},
  { path: 'adminmain', component:AdminmainComponent},
  { path: 'empleadomain', component:EmpleadomainComponent},
  { path: 'rrhh', component:RrhhComponent }
  //{path:'sistema', component:SistemaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
