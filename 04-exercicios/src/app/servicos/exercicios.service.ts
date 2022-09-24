import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciciosService {

  constructor() { }
  
  soma(n1:number, n2:number) {
    return n1 + n2;
  }

  calculaDobro(n : number) {
    return 2 * n;
  }

  calculaTriplo(n : number) {
    return 3 * n;
  }
  
  verificaParOuImpar(n : number) {
    if (n % 2 == 0) {
      return "PAR";
    } else {
      return "ÍMPAR";
    }
  }

  verificaPrimo(n : number) {
    if (n <= 2)
      return "PRIMO";

    for (let i = 2; i < n - 1; ++i) {
      if (n % i == 0)
        return "NÃO É PRIMO";
    }

    return "PRIMO";
  }

}
