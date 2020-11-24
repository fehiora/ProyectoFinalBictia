import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeUsuarioComponent } from './home-usuario/home-usuario.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { IngresoAdminComponent } from './ingreso-admin/ingreso-admin.component';
import { FooterComponent } from './footer/footer.component';
import { GestionAdminComponent } from './gestion-admin/gestion-admin.component';
import { GestionUsuarioComponent } from './gestion-usuario/gestion-usuario.component';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';
import { ConsultarSintomasComponent } from './consultar-sintomas/consultar-sintomas.component';
import { ReportarSintomasComponent } from './reportar-sintomas/reportar-sintomas.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { AdminService } from './service/admin.service';
// import { AuthGuard } from './guard/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeUsuarioComponent,
    RegistroUsuarioComponent,
    IngresoAdminComponent,
    FooterComponent,
    GestionAdminComponent,
    GestionUsuarioComponent,
    ModificarUsuarioComponent,
    ConsultarSintomasComponent,
    ReportarSintomasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AdminService,
    // AuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
