import { Component, OnInit } from '@angular/core';
import { AuthService }from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-usuario',
  templateUrl: './home-usuario.component.html',
  styleUrls: ['./home-usuario.component.css']
})
export class HomeUsuarioComponent implements OnInit {

  constructor(
    private auth:AuthService, 
    private router: Router
  ) { }

  ingresoUsuario = {
    documento:'',
    clave: ''
  }

  ngOnInit(): void {
  }

  ingresarUsuario(){
    if(this.auth.ingresoUsuario(this.ingresoUsuario)){
      this.router.navigate(['reportarSintomas']);
    }else{
      alert("Error en el ingreso");
    }
  }
}
