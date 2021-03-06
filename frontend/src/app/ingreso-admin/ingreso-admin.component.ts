import { Component, OnInit } from '@angular/core';
import { AuthService }from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso-admin',
  templateUrl: './ingreso-admin.component.html',
  styleUrls: ['./ingreso-admin.component.css']
})
export class IngresoAdminComponent implements OnInit {

  constructor(
    private auth: AuthService, 
    private router: Router
  ) { }

  ingresoAdmin = {
    documento:'',
    clave:''
  }

  ngOnInit(): void {
  }

  ingresarAdmin(){
    this.auth.ingresoAdmin(this.ingresoAdmin).subscribe(
      (res) => {
        localStorage.setItem('token', res.jwtToken);
        this.router.navigate(['gestionAdmin']);
      },
      (err) => {
        console.log(err)
        alert(err.error);
        this.ingresoAdmin = {
          documento:'',
          clave:''
        }
      }
    );
  }
}
