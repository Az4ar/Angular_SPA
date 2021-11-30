import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApoioComponent } from './apoio/apoio.component';
import { ArtigosBbComponent } from './artigos-bb/artigos-bb.component';
import { BrinquedosEComponent } from './brinquedos-e/brinquedos-e.component';
import { BrinquedosGComponent } from './brinquedos-g/brinquedos-g.component';
import { BrinquedosMComponent } from './brinquedos-m/brinquedos-m.component';
import { EspumadosComponent } from './espumados/espumados.component';
import { HomeComponent } from './home/home.component';
import { JogosComponent } from './jogos/jogos.component';
import { LivrosComponent } from './livros/livros.component';
import { MaterialInclusaoComponent } from './material-inclusao/material-inclusao.component';
import { MoveisInfaComponent } from './moveis-infa/moveis-infa.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {breadcrumb:'Home'}},

  {path: 'apoio', component: ApoioComponent, data: {breadcrumb: 'Home/Materiais De Apoio' }},
  {path: 'artigos-bb', component: ArtigosBbComponent, data: {breadcrumb: 'Home/Artigos Para Bebes/{{url}}'}},  
  {path: 'brinquedos-e', component: BrinquedosEComponent, data: {breadcrumb: 'Home/Brinquedos-Educativos'}},
  {path: 'brinquedos-g', component: BrinquedosGComponent, data: {breadcrumb: 'Home/Brinquedos em Geral'}},
  {path: 'brinquedos-m', component: BrinquedosMComponent, data: {breadcrumb: 'Home/Brinquedos de Madeira'}},
  {path: 'espumados', component: EspumadosComponent, data: {breadcrumb: 'Home/Espumados'}},
  {path: 'jogos', component: JogosComponent, data: {breadcrumb: 'Home/Jogos Educativos'}},
  {path: 'livros', component: LivrosComponent, data: {breadcrumb: 'Home/Livros Educativos'}},
  {path: 'material-inclusao', component: MaterialInclusaoComponent, data: {breadcrumb: 'Home/Materiais de Inclusao'}},
  {path: 'moveis-infa', component: MoveisInfaComponent, data: {breadcrumb: 'Home/Moveis Infantis'}},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
