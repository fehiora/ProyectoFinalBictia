import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registroUrl = 'http://localhost:3000/apiCov/usuario/crear_user';
  private ingresoUsuarioUrl = 'http://localhost:3000/apiCov/authUsuario';
  private ingresoAdminUrl = 'http://localhost:3000/apiCov/authAdmin';
  private registroSintomaUrl = 'http://localhost:3000/apiCov/seguimiento';

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

  ingresoUsuarioOn(){
    return !!localStorage.getItem('token');
  }

  obtenerTokenUsuario(){
    return localStorage.getItem('token');
  }

  registroSintoma(admin){
    return this.http.post<any>(this.registroSintomaUrl, admin);
  }

}
