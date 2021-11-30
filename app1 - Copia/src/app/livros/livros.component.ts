import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  constructor() { }
  public livros = ['Blue Editora - Conhecendo os Sons', 'Blue Editora - Diario Secreto', 'Blue Editora - Lindas fabulas Para Ler e Ouvir', 'Blue Editora - A Lebre e a Tartaruga', 'Blue Editora - Assembleia dos Ratos', 'Blue Editora - A Raposa e as Uvas', 'Blue Editora - A Galinha dos Ovos de Ouro', 'Blue Editora - O Leao e a Raposa', 'Blue Editora - A Pequena Sereia', 'Blue Editora - Cinderela']

  ngOnInit(): void {
  }

}
