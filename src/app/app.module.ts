import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
