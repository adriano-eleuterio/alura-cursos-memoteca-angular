import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  criarPensamento(){
    alert("No pensamento");
  }

  cancelar(){
    alert("Cancelado");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
