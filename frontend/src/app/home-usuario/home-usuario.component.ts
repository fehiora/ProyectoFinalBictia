import { Component, OnInit } from '@angular/core';
import { AuthService }from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-usuario',
  templateUrl: './home-usuario.component.html',
  styleUrls: ['./home-usuario.component.css']
})
export class HomeUsuarioComponent implements OnInit {

  constructor(private auth:AuthService, private router: Router) { }

  ingreso = {
    documento:'',
    clave: ''
  }

  ngOnInit(): void {
  }

  ingresar(){
    this.auth.ingresoUsuario(this.ingreso).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }
}
