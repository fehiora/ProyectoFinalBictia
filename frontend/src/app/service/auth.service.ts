import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registroUrl = 'http://localhost:3000/apiCov/usuario/crear_user';
  private ingresoUsuarioUrl = 'http://localhost:3000/apiCov/authUsuario';
  private ingresoAdminUrl = 'http://localhost:3000/apiCov/authAdmin';
  private registroSintomaUrl = 'http://localhost:3000/apiCov/seguimiento';
  private modificarDatosUrl = 'http://localhost:3000/apiCov/usuario';
  
  constructor(private http: HttpClient) { }

  registroUsuario(usuario){
    return this.http.post<any>(this.registroUrl, usuario);
  }

  ingresoUsuario(usuario){
    return this.http.post<any>(this.ingresoUsuarioUrl, usuario);
  }

  ingresoAdmin(admin){
    return this.http.post<any>(this.ingresoAdminUrl, admin);
  }

  isAdmin(){
    if(localStorage.getItem('token')){
      const token_data = JSON.parse(atob(localStorage.getItem('token').split('.')[1]))
      return token_data.admin;
    }
    return false;
  }

  nombre(){
    if(localStorage.getItem('token')){
      const token_data = JSON.parse(atob(localStorage.getItem('token').split('.')[1]))
      return token_data.nombre;
    }
    return '';
  }

  sesionActiva(){
    if(localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
  }

  terminarSesion(){
    if(localStorage.getItem('token')){
      localStorage.removeItem('token')
    }
  }

  registroSintoma(datos){
    let token = localStorage.getItem('token');
    return this.http.post<any>(
      this.registroSintomaUrl, 
      datos,
      { headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` }) }
    );
  }

  mostrarDatos(){
    let token = localStorage.getItem('token');
    return this.http.get<any>(
      this.modificarDatosUrl, 
      { headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` }) }
    );
  }

  modificarDatos(datosUsuario){
    let token = localStorage.getItem('token');
    return this.http.put<any>(
      this.modificarDatosUrl, 
      datosUsuario,
      { headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` }) }
    );

  }
}
