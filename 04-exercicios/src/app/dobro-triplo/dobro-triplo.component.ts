import { Component, OnInit } from '@angular/core';
import { ExerciciosService } from '../servicos/exercicios.service';

@Component({
  selector: 'app-dobro-triplo',
  templateUrl: './dobro-triplo.component.html',
  styleUrls: ['./dobro-triplo.component.scss'],
})
export class DobroTriploComponent implements OnInit {

  private n1 : number;

  private n2 : number;

  private saidaDobro : string;

  private saidaTriplo : string;

  constructor(private exerciciosService : ExerciciosService) { }

  ngOnInit() {}

  dobro() {
    let dobro = 
      this.exerciciosService.calculaDobro(this.n1);

    this.saidaDobro = `O dobro de ${this.n1} é ${dobro}.`;
  }

  triplo() {
    let triplo = 
      this.exerciciosService.calculaTriplo(this.n2);

    this.saidaTriplo = `O triplo de ${this.n2} é ${triplo}.`;
  }
}
