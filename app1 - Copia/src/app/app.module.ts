import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BreadcrumbModule } from 'angular-crumbs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrinquedosGComponent } from './brinquedos-g/brinquedos-g.component';
import { BrinquedosEComponent } from './brinquedos-e/brinquedos-e.component';
import { BrinquedosMComponent } from './brinquedos-m/brinquedos-m.component';
import { LivrosComponent } from './livros/livros.component';
import { JogosComponent } from './jogos/jogos.component';
import { ApoioComponent } from './apoio/apoio.component';
import { MaterialInclusaoComponent } from './material-inclusao/material-inclusao.component';
import { ArtigosBbComponent } from './artigos-bb/artigos-bb.component';
import { MoveisInfaComponent } from './moveis-infa/moveis-infa.component';
import { EspumadosComponent } from './espumados/espumados.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    BrinquedosGComponent,
    BrinquedosEComponent,
    BrinquedosMComponent,
    LivrosComponent,
    JogosComponent,
    ApoioComponent,
    MaterialInclusaoComponent,
    ArtigosBbComponent,
    MoveisInfaComponent,
    EspumadosComponent,
    HomeComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule,
   
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
