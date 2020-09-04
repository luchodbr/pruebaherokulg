import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { ErrorComponent } from './componentes/error/error.component';

const routes: Routes = [
  {path: 'bienvenidaPractica', component: BienvenidaComponent},
  {path: 'inicioSesion', component: InicioSesionComponent},
  {path: 'error', component: ErrorComponent},
  {path: '', component: LoginComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
