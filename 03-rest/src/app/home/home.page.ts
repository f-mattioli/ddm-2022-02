import { Component } from '@angular/core';
import { Repositorio } from '../model/repositorio';
import { GitHubRestService } from '../service/git-hub-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private nome : string;

  private repositorios : Repositorio[] = [];

  constructor(private gitHubRestService : GitHubRestService) {}

  pesquisa() {
    this.gitHubRestService.pesquisaRepositorios(this.nome)
      .subscribe(repositorios => {
        this.repositorios = repositorios;
      },
      erro => { console.log('Erro no componente: ' + erro);
    
    });
  }

}
