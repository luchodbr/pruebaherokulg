import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { ErrorComponent } from './componentes/error/error.component';
import { ListadoEntidadComponent } from './componentes/listado-entidad/listado-entidad.component';
import { ControlEntidadComponent } from './componentes/control-entidad/control-entidad.component';

const routes: Routes = [
  {path: '', component: BienvenidaComponent},
  {path: 'inicioSesion', component: InicioSesionComponent},
  {path: 'paises/listado', component: ControlEntidadComponent},
  {path: 'error', component: ErrorComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
