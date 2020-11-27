import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  public listaUsuarios = [];

  constructor(
  	private adminService: AdminService,
  	public auth: AuthService,
  ) {}

  ngOnInit(): void {
  	this.listarUsuarios();
  }

  listarUsuarios(){
  	this.adminService.listarUsuarios().subscribe(
  		(res) => {
  			this.listaUsuarios = res;
  		},
  		(err) => {
  			alert(err.error);
  		}
  	)
  }

}
