import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {
  livro: any = {
    titulo: 'learning Java  tchau',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2015, 5, 23),
    url: 'http://a.co/glqjRP'
  }

  livros: string[] = ['angular2', 'java']
  filtro!: string

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve("valor Assíncrono"), 2000)
  });

  valorAsync2 = interval(2000)
  .pipe(
    map(valor => 'Valor assíncrono 2')
  );

  constructor() { }

  ngOnInit(): void {
  }

  addCurso(valor: string) {
    this.livros.push(valor)
    console.log(this.livros)
  }

  obterCursos() {
    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }
    return this.livros.filter((v) => {
      if((v:string) => v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
        return true
      }
      return false
    })
  }
}
