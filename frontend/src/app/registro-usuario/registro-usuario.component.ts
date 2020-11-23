import { Component, OnInit } from '@angular/core';
import { AuthService }from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private router: Router,
  ) { }

  registrarUsuario = {
    nombre: '',
    apellido: '',
    documento: '',
    sexo: '',
    fechaNacim: '',
    preMedica: '',
    cargo: '',
    clave: '',
    usoDatos: '',
  };

  ngOnInit(): void {
  }

  registroUsuario(){
    this.auth.registroUsuario(this.registrarUsuario).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['homeUsuario']);
      },
      (err) => console.log(err)
    );
  }
}
