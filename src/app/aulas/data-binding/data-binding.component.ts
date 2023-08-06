import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: string = "http://loiane.com"

  cursoAngular: boolean = true

  urlImagem: string = "http://lorempixel.com.br/500/400/nature"

  valorAtual!: string
  valorSalvo!: string

  isMouseOver: boolean = false
  nome: string = 'abc'
  pessoa: any = {
    nome: 'joao',
    idade: 16
  }

  nomeDoCurso: string = 'angular'
valorInicial = 15
  constructor() { }

  ngOnInit(): void {
  }

  getCurtirCurso() {
    return true
  }
  getValor() {
    return 1;
  }
  botaoClicado() {
    alert("clicado")
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onmouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }

  onMudouValor(evento: any) {
    console.log(evento)
  }
}
