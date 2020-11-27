import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private listarSintomasUrl = 'http://localhost:3000/apiCov/seguimiento/listaSintomas/';
  private datosUsuariosUrl = 'http://localhost:3000/apiCov/usuario/';

  constructor(
    private http: HttpClient,
  ) { }

  listaSintomas(){
    let token = localStorage.getItem("token");
    return this.http.get<any>(
      this.listarSintomasUrl,
      { headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` }) }
    );
  }

  listaSintomasPorDocumento(documento){
    let token = localStorage.getItem("token");
    return this.http.get<any>(
      `${this.listarSintomasUrl}${documento}`,
      { headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` }) }
    );
  }  

  listarUsuarios(){
    let token = localStorage.getItem("token");
    return this.http.get<any>(
      `${this.datosUsuariosUrl}listarUsuarios/`,
      { headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` }) }
    );
  }

  obtenerDatosUsuario(documento){
    let token = localStorage.getItem("token");
    // console.log('obtenerDatosUsuario', `${this.datosUsuariosUrl}${documento}`);
    return this.http.get<any>(
      `${this.datosUsuariosUrl}${documento}`,
      { headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` }) }
    );
  }

  modificarDatosUsuario(documento, nuevos_datos){
    let token = localStorage.getItem("token");
    return this.http.put<any>(
      `${this.datosUsuariosUrl}${documento}`,
      nuevos_datos,
      { headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` }) }
    );
  }  

}
