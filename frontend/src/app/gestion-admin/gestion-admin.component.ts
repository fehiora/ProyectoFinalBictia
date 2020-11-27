import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { AdminService } from '../service/admin.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-gestion-admin',
  templateUrl: './gestion-admin.component.html',
  styleUrls: ['./gestion-admin.component.css'],
})
export class GestionAdminComponent implements OnInit {
  public seguimientos: [];
  public usuario = {
  	documento: ''
  }
  
  constructor(
  	private adminService: AdminService,
  	public auth: AuthService,
  ) {}

  ngOnInit(): void {
    this.listarSintomas();
  }


  listarSintomasPorDocumento() {
  	console.log('usuario:', this.usuario)
  	console.log('doc:', this.usuario.documento)
  	this.adminService.listaSintomasPorDocumento(this.usuario.documento).subscribe(
      (res) => {
        console.log('listarSintomasPorDocumento:', res);
        this.seguimientos = res;
      },
      (err) => {
        console.error('Error en la solicitud de sintomas');
        console.log(err);
      }
    );
  }

  listarSintomas() {
    this.adminService.listaSintomas().subscribe(
      (res) => {
        // console.log(res);
        this.seguimientos = res;
      },
      (err) => {
        console.error('Error en la solicitud de sintomas');
        console.log(err);
      }
    );
  }
}
