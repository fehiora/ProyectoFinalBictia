import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private listarSintomasUrl = 'http://localhost:3000/apiCov/seguimiento/listaSintomas/';

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
    let headers = new HttpHeaders();
    let token = localStorage.getItem("token");
    headers.append("Authorization", `Bearer ${token}`);
    return this.http.get<any>(
      `${this.listarSintomasUrl}${documento}`,
      { headers: headers }
    );
  }  
}
