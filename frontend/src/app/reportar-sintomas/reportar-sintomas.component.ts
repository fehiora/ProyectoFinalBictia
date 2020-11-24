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

    const datos_sintomas = {
      jornada: this.registrarSintoma.jornada,
      garganta: this.registrarSintoma.garganta === 's' ? true : false,
      malestar: this.registrarSintoma.malestar === 's' ? true : false,
      fatiga: this.registrarSintoma.fatiga === 's' ? true : false,
      fiebre: this.registrarSintoma.fiebre === 's' ? true : false,
      tos: this.registrarSintoma.tos === 's' ? true : false,
      respiracion: this.registrarSintoma.respiracion === 's' ? true : false,
      olfato: this.registrarSintoma.olfato === 's' ? true : false,
      nasal: this.registrarSintoma.nasal === 's' ? true : false,
      aislamiento1: this.registrarSintoma.aislamiento1 === 's' ? true : false,
      aislamiento2: this.registrarSintoma.aislamiento2 === 's' ? true : false,
      convivencia: this.registrarSintoma.convivencia === 's' ? true : false,
      contacto: this.registrarSintoma.contacto === 's' ? true : false,
    }

    this.auth.registroSintoma(datos_sintomas).subscribe(
      (res) => {
        console.log(res);
        alert('Sintomas registrados exitosamente');
        this.limpiarformulario();
      },
      (err) => console.log(err)
    );
  }

  limpiarformulario(){
    this.registrarSintoma = {
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
  }
  
}
