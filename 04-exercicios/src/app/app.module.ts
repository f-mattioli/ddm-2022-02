import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ExerciciosService } from './servicos/exercicios.service';
import { FormsModule } from '@angular/forms';
import { SomaComponent } from './soma/soma.component';
import { DobroTriploComponent } from './dobro-triplo/dobro-triplo.component';

@NgModule({
  declarations: [AppComponent,
    SomaComponent,
    DobroTriploComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule],
  providers: [ExerciciosService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
