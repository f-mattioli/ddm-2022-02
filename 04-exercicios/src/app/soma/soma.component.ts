import { Component, OnInit } from '@angular/core';
import { ExerciciosService } from '../servicos/exercicios.service';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.scss'],
})
export class SomaComponent implements OnInit {

  private n1: number;

  private n2: number;

  private mensagem: string;

  constructor(private exerciciosService : ExerciciosService) { }

  ngOnInit() {}

  soma() {
    let resultado: number = 
      this.exerciciosService.soma(this.n1,  this.n2);

    this.mensagem = `${this.n1} + ${this.n2} = ${resultado}`;
  }

}
