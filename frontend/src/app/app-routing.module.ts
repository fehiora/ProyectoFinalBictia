import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarSintomasComponent } from './consultar-sintomas/consultar-sintomas.component';
import { GestionAdminComponent } from './gestion-admin/gestion-admin.component';
import { GestionUsuarioComponent } from './gestion-usuario/gestion-usuario.component';
import { HomeUsuarioComponent } from './home-usuario/home-usuario.component';
import { IngresoAdminComponent } from './ingreso-admin/ingreso-admin.component';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { ReportarSintomasComponent } from './reportar-sintomas/reportar-sintomas.component';
import { ModificarDatosComponent } from './modificar-datos/modificar-datos.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';

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
  {
    path: 'consultarSintomas',
    component: ConsultarSintomasComponent,
  },
  {
    path: 'gestionAdmin',
    component: GestionAdminComponent,
  },
  {
    path: 'gestionUsuario',
    component: GestionUsuarioComponent,
  },
  {
    path: 'modificarUsuario/:documento',
    component: ModificarUsuarioComponent,
  },
  {
    path: 'reportarSintomas',
    component: ReportarSintomasComponent,
  },
  {
    path: 'modificarDatos',
    component: ModificarDatosComponent,
  },
  {
    path: 'listarUsuarios',
    component: ListarUsuariosComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
