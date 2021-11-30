import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brinquedos-e',
  templateUrl: './brinquedos-e.component.html',
  styleUrls: ['./brinquedos-e.component.css']
})
export class BrinquedosEComponent implements OnInit {

  constructor() { }
  public brinquedos_educativos = ['Aprendendo o ABC', 'Aramado Borboleta Calu', 'Aramado Entrelaçado Carlu', 'Aramado Espiral', 'Blocos Logicos com 48 peças', 'Brincando de Engenheiro', 'Brinquedo de Encaixe', 'Brinquedo Educativo Fazendinha', 'Caixa Encaixa', 'Cogumelo Educativo', ]  

  ngOnInit(): void {
  }

}
