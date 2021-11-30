import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

  constructor() { }
  public jogos = ['Dedo Gol em Madeira', 'Desafio Tetra Cores',  'Jogo Fazendo Mimica', 'Festival de Jogos', 'Jogo 3 em 1', 'Jogo 4 em 1', 'Jogo Ache As Palavras', 'Jogo Advinha Quem?', 'Jogo Agon em Madeira', 'Jogo Alvo Ball Radical']

  ngOnInit(): void {
  }

}
