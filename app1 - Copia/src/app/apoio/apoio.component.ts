import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apoio',
  templateUrl: './apoio.component.html',
  styleUrls: ['./apoio.component.css']
})
export class ApoioComponent implements OnInit {

  public brinquedos_apoio = ['Abaco 10 colunas', 'Abaco do aluno', 'Alfabeto & Cia', 'Alfabeto Ilustrado Libras', 'Alfabeto Movel em Degrau', 'Alfabeto na Madeira', 'Alfabeto Recortado com 26 Peças', 'Alinhavo de Formas Geometricas', 'Alinhavo Faça O Bicho com 77 peças', 'Alinhavo Jardi - New Art']

  constructor() { }

  ngOnInit(): void {
  }

}
