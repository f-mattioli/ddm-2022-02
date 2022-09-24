import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { SomaComponent } from './soma/soma.component';
import { DobroTriploComponent } from './dobro-triplo/dobro-triplo.component';
import { ParOuImparComponent } from './par-ou-impar/par-ou-impar.component';
import { PrimoComponent } from './primo/primo.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'soma',
    component: SomaComponent
  },
  {
    path: 'dobro',
    component: DobroTriploComponent
  },
  {
    path: 'parImpar',
    component: ParOuImparComponent
  },
 {
    path: 'primo',
    component: PrimoComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
