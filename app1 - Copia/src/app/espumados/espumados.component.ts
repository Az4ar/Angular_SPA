import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espumados',
  templateUrl: './espumados.component.html',
  styleUrls: ['./espumados.component.css']
})
export class EspumadosComponent implements OnInit {

  constructor() { }
  public espumados = ['Caminha Empilhavel', 'Colchonete', 'Colchonete Espumado Circular', 'Colchonete Puzzle Espumado', 'Cubos de Atividades em Tecido', 'Dado de Numeros Espumados', 'Jogo Do Contador Espumado', 'Jogo Do Tiro Ao Alvo Espumado', 'Jogo de Atributos Espumado', 'Sofa Centro De leitura Espumado']
  ngOnInit(): void {
  }

}
