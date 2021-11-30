import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-inclusao',
  templateUrl: './material-inclusao.component.html',
  styleUrls: ['./material-inclusao.component.css']
})
export class MaterialInclusaoComponent implements OnInit {

  constructor() { }
  public material_inclusao = ['Alfabeto Do Professor Libras', 'Formas Deometricas Carimbadas', 'Alinhavo Numerioco Peças Carimbads', 'Bola de Bobath', 'Boneca Tina Negra', 'Brinquedo de Encaixe Safari Carimabdo', 'Cubo Com Multiatividades', 'Desafio Esquilibrio Espiral', 'Formas Geometricas Simpples', 'Jogo Loto Leitura']

  ngOnInit(): void {
  }

}
