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

}
