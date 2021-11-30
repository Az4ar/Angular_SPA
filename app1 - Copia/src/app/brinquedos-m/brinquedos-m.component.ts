import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brinquedos-m',
  templateUrl: './brinquedos-m.component.html',
  styleUrls: ['./brinquedos-m.component.css']
})
export class BrinquedosMComponent implements OnInit {

  constructor(private router: Router) { 
    router.events.subscribe((url:any) => console.log(url));
    console.log(router.url);  // to print only path eg:"/login


  }
  public briquedos_madeira = ['Armario Guarda Roupas de Boneca', 'Banca Brincando de Vender',  'Brincado de Engenheiro 150 Peças', 'Caixinha Veste Bem Ele', 'Caminhao Com 12 Blocos', 'Carro com 10 BLocos', 'Casinha de Boneca Sweet Home', 'Conheça o Corpo Humano Com Jorge Madeira', 'Cubo Didatico', 'Cubo de Encaixe']
  ngOnInit(): void {
  }

}
