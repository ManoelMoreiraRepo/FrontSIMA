import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';

import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GpsComponent } from './components/gps/gps.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { FormsModule } from '@angular/forms';
import { NuevoempleadoComponent } from './components/nuevoempleado/nuevoempleado.component';
import { EditempleadoComponent } from './components/editempleado/editempleado.component';
import { InformacionempleadoComponent } from './components/informacionempleado/informacionempleado.component';




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
    InformacionempleadoComponent
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
