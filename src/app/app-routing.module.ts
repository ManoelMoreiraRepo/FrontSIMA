import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditempleadoComponent } from './components/editempleado/editempleado.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { GpsComponent } from './components/gps/gps.component';
import { InformacionempleadoComponent } from './components/informacionempleado/informacionempleado.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { NuevoempleadoComponent } from './components/nuevoempleado/nuevoempleado.component';
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
  //{path:'sistema', component:SistemaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
