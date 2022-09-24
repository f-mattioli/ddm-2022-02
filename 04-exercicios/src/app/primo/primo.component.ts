import { Component, OnInit } from '@angular/core';
import { ExerciciosService } from '../servicos/exercicios.service';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.scss'],
})
export class PrimoComponent implements OnInit {

  private numero : number;

  private saida : string;

  constructor(private exerciciosService : ExerciciosService) { }

  ngOnInit() {}

  primo() {
    let primo : string =
      this.exerciciosService.verificaPrimo(this.numero);

    this.saida = `${this.numero}: ${primo}`;
  }

}
