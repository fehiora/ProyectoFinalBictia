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
  
  constructor(private http: HttpClient) { }

  registroUsuario(usuario){
    return this.http.post<any>(this.registroUrl, usuario);
  }

  ingresoUsuario(usuario){
    return this.http.post<any>(this.ingresoUsuarioUrl, usuario).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.jwtToken);
        return true;
      },
      (err) => {
        console.log(err)
        return false;
      }
    );
  }

  ingresoAdmin(admin){
    return this.http.post<any>(this.ingresoAdminUrl, admin).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.jwtToken);
        return true;
      },
      (err) => {
        console.log(err)
        return false;
      }
    );
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
}
