import { Component, OnInit } from '@angular/core';
import { AdminService }from '../service/admin.service';

@Component({
  selector: 'app-gestion-admin',
  templateUrl: './gestion-admin.component.html',
  styleUrls: ['./gestion-admin.component.css']
})
export class GestionAdminComponent implements OnInit {
	public seguimientos: []

  constructor(
  	private adminService: AdminService
  ) {}

  ngOnInit(): void {
  	this.listarSintomas();
  }

  listarSintomas(){
    this.adminService.listaSintomas().subscribe(
      (res) => {
        console.log(res);
        this.seguimientos = res;
      },
      (err) => {
      	console.error("Error en la solicitud de sintomas");
      	console.log(err);
      }
    );
  }

}
