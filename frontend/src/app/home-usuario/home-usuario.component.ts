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
    this.auth.ingresoUsuario(this.ingresoUsuario).subscribe(
      (res) => {
        console.log("res:", res);
        localStorage.setItem('token', res.jwtToken);
        this.router.navigate(['reportarSintomas']);
      },
      (err) => {
        console.log("err:", err)
        alert(err.error);
        this.ingresoUsuario = {
          documento:'',
          clave: ''
        }
      }
    )
    
  }
}
