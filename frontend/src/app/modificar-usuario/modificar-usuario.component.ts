import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { AdminService } from '../service/admin.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {

  public documento: number;
  public datosUsuario = {
    nombre: '',
    apellido: '',
    documento: '',
    sexo: '',
    fechaNacim: '',
    preMedica: '',
    cargo: '',
    clave: '',
  };

  constructor(
  	private adminService: AdminService,
  	public auth: AuthService,
  	private route: ActivatedRoute,
  	private router: Router,
  ) {}

  ngOnInit(): void {
  	this.route.params.subscribe( (params) => {
  		// console.log('params:', params);
  		this.documento = +params['documento'] // el '+' convierte el documento en número
  		// console.log('documento:', this.documento);
  		this.obtenerDatosUsuario();
  	});
  }

  obtenerDatosUsuario(){
  	this.adminService.obtenerDatosUsuario(this.documento).subscribe(
  		(res) => {
  			console.log("res", res);
  			this.datosUsuario.nombre = res.nombre;
  			this.datosUsuario.apellido = res.apellido;
  			this.datosUsuario.documento = res.documento;
  			this.datosUsuario.sexo = res.sexo;
  			this.datosUsuario.fechaNacim = res.fechaNacim;
  			this.datosUsuario.preMedica = res.preMedica;
  			this.datosUsuario.cargo = res.cargo;
  			this.datosUsuario.clave = res.clave;
  		},
  		(err) => {
  			console.log(err);
  		}
  	);
  }

  modificarDatos(){
  	console.log("datosUsuario", this.datosUsuario);
  	this.adminService.modificarDatosUsuario(this.documento, this.datosUsuario).subscribe(
  		(res) => {
  			// console.log("res", res);
  			alert(`Usuario ${this.documento} actualizado existosamente`);
  			this.router.navigate(['listarUsuarios']);
  		},
  		(err) => {
  			console.log(err);
  		}
  	);
  }

}
