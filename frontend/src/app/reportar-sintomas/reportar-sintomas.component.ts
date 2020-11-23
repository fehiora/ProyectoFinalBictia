import { Component, OnInit } from '@angular/core';
import { AuthService }from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportar-sintomas',
  templateUrl: './reportar-sintomas.component.html',
  styleUrls: ['./reportar-sintomas.component.css']
})
export class ReportarSintomasComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private router: Router,
  ) { }

  registrarSintoma = {
    jornada:'',
    garganta: '',
    malestar: '',
    fatiga:'',
    fiebre: '',
    tos: '',
    respiracion: '',
    olfato: '',
    nasal:'',
    aislamiento1: '',
    aislamiento2: '',
    convivencia: '',
    contacto:'',
  };

  ngOnInit(): void {
  }

  registroSintoma(){
    this.auth.registroSintoma(this.registrarSintoma).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }
}
