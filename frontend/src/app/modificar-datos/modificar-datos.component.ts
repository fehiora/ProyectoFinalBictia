import { Component, OnInit } from '@angular/core';
import { AuthService }from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modificar-datos',
  templateUrl: './modificar-datos.component.html',
  styleUrls: ['./modificar-datos.component.css']
})
export class ModificarDatosComponent implements OnInit {

  public datosUsuario = {
    nombre: '',
    apellido: '',
    documento: '',
    sexo: '',
    fechaNacim: '',
    preMedica: '',
    cargo: '',
    clave: '',
  }

  constructor(
    private router: Router,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.auth.mostrarDatos().subscribe(
      (res) => {
        console.log(res)
        this.datosUsuario.nombre = res.nombre;
        this.datosUsuario.apellido = res.apellido;
        this.datosUsuario.documento = res.documento;
        this.datosUsuario.sexo = res.sexo;
        this.datosUsuario.fechaNacim = res.fechaNacim;
        this.datosUsuario.preMedica = res.preMedica;
        this.datosUsuario.cargo = res.cargo;
        this.datosUsuario.clave = res.clave;
      },
      (err) => console.log(err)
    )
  }

  modificarDatos(){
    this.auth.modificarDatos(this.datosUsuario).subscribe(
      (res) => {
        alert('Usuario Modificado con exito')
      },
      (err) => console.log(err)
    )
  }

}
