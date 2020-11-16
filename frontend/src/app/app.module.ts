import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeUsuarioComponent } from './home-usuario/home-usuario.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { IngresoUsuarioComponent } from './ingreso-usuario/ingreso-usuario.component';
import { IngresoAdminComponent } from './ingreso-admin/ingreso-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeUsuarioComponent,
    RegistroUsuarioComponent,
    IngresoUsuarioComponent,
    IngresoAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
