import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moveis-infa',
  templateUrl: './moveis-infa.component.html',
  styleUrls: ['./moveis-infa.component.css']
})
export class MoveisInfaComponent implements OnInit {

  constructor() { }
  public moveis = ['Arrumadinho Misto Cabide', 'Banco Garden', 'Banco Jardin com Encosto', 'Banco Jardin Sem Encosto', 'Barraca Casinha Divertida', 'Barraca Casinha Doce', 'Cadeira Infantil',  'Big Cozinhando', 'Caminha Espumada', 'Cercadinho']


  ngOnInit(): void {
  }

}
