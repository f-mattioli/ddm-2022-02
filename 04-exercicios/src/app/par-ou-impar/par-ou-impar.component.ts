import { Component, OnInit } from '@angular/core';
import { ExerciciosService } from '../servicos/exercicios.service';

@Component({
  selector: 'app-par-ou-impar',
  templateUrl: './par-ou-impar.component.html',
  styleUrls: ['./par-ou-impar.component.scss'],
})
export class ParOuImparComponent implements OnInit {

  private numero : number;

  private saida : string;

  constructor(private exerciciosService : ExerciciosService) { }

  ngOnInit() {}

  parImpar() {
    let parOuImpar : string = 
      this.exerciciosService.verificaParOuImpar(this.numero);
    
    this.saida = `O número ${this.numero} é ${parOuImpar}.`;
  }

}
