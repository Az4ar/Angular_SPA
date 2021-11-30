import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brinquedos-g',
  templateUrl: './brinquedos-g.component.html',
  styleUrls: ['./brinquedos-g.component.css']
})
export class BrinquedosGComponent implements OnInit {

  constructor() { }
  public brinquedos_geral = ['Ambulancia em Bloco', 'Andandor Didatico', 'Aqua Pesca', 'Balanço Criança', 'Avião de Controle Remoto', 'Baby Mix', 'Barbie Mix', 'Max Steel', 'Lego Blocos de Montar', 'Bola de Voley']

  ngOnInit(): void {
  }

}
