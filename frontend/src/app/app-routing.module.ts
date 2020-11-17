import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeUsuarioComponent } from './home-usuario/home-usuario.component';
import { IngresoAdminComponent } from './ingreso-admin/ingreso-admin.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

const routes: Routes = [
  {
    path:'', 
    component: HomeUsuarioComponent,
    pathMatch: 'full',
  },
  {
    path: 'homeUsuario',
    component: HomeUsuarioComponent
  },
  {
    path: 'ingresoAdmin',
    component: IngresoAdminComponent,
  },
  {
    path: 'registroUsuario',
    component: RegistroUsuarioComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
