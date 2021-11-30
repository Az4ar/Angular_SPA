import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artigos-bb',
  templateUrl: './artigos-bb.component.html',
  styleUrls: ['./artigos-bb.component.css']
})
export class ArtigosBbComponent implements OnInit {

  public artigos_para_bebes = ['Andador', 'Babador', 'Baby Land Helicoptero', 'Baby Mix', 'Bancada de Ferramenta infantil',  'Banho Divertido', 'Bico de Mamadeira', 'Blu Editora - Hora do Banho ', 'Bola Monta e Desmonta', 'Boneca Flor' ]
  constructor() { }

  ngOnInit(): void {
  }

}
