import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component';
import { MainComponent } from './paginas/main/main.component';
import {AdminmainComponent} from './paginas/adminmain/adminmain.component';

import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GpsComponent } from './paginas/gps/gps.component';
import { EmpleadoComponent } from './paginas/empleado/empleado.component';
import { FormsModule } from '@angular/forms';
import { NuevoempleadoComponent } from './paginas/nuevoempleado/nuevoempleado.component';
import { EditempleadoComponent } from './paginas/editempleado/editempleado.component';
import { InformacionempleadoComponent } from './paginas/informacionempleado/informacionempleado.component';
import { SeparadorComponent } from './components/separador/separador.component';
import { EmpleadomainComponent } from './paginas/empleadomain/empleadomain.component';
import { PuntoaccesoComponent } from './components/puntoacceso/puntoacceso.component';
import { RrhhComponent } from './paginas/rrhh/rrhh.component';
import { TituleroComponent } from './components/titulero/titulero.component';
import { ContadorComponent } from './components/contador/contador.component';
import { BolsaadminComponent } from './paginas/bolsaadmin/bolsaadmin.component';
import { CredencialesComponent } from './paginas/credenciales/credenciales.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { OfertaComponent } from './paginas/oferta/oferta.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { InfraccionesComponent } from './paginas/infracciones/infracciones.component';
import { ParqueComponent } from './paginas/parque/parque.component';
import { BarChartComponent } from './components/barras/barChartComponent.component';
import { CommonModule } from '@angular/common';
import { SuministrosComponent } from './paginas/suministros/suministros.component';
import { PerifericosComponent } from './paginas/perifericos/perifericos.component';
import { EquipamientosComponent } from './paginas/equipamientos/equipamientos.component';
import { PerfilComponent } from './components/perfil/perfil.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    GpsComponent,
    EmpleadoComponent,
    NuevoempleadoComponent,
    EditempleadoComponent,
    InformacionempleadoComponent,
    AdminmainComponent,
    SeparadorComponent,
    EmpleadomainComponent,
    PuntoaccesoComponent,
    RrhhComponent,
    TituleroComponent,
    ContadorComponent,
    BolsaadminComponent,
    CredencialesComponent,
    OfertaComponent,
    CalendarioComponent,
    InfraccionesComponent,
    ParqueComponent,
    BarChartComponent,
    SuministrosComponent,
    PerifericosComponent,
    EquipamientosComponent,
    PerfilComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    PaginationComponent,
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
