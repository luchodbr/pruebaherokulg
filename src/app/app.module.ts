import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { ErrorComponent } from './componentes/error/error.component';
import { ListadoEntidadComponent } from './componentes/listado-entidad/listado-entidad.component';
import { ControlEntidadComponent } from './componentes/control-entidad/control-entidad.component';
import { HttpClientModule } from '@angular/common/http';
 
@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    InicioSesionComponent,
    ErrorComponent,
    ListadoEntidadComponent,
    ControlEntidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
