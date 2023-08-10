import { Injectable } from '@angular/core';
import { Aluno } from '../alunos';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
    { id: 1, nome: 'João Pedro', email: 'joao@gmail.com' },
    { id: 2, nome: 'Matheus', email: 'matheus@gmail.com' }
  ]

  constructor() { }

  getAlunos() {
    return this.alunos
  }

  getAluno(id: number) {
    let cursos = this.getAlunos();
    for(let i=0; i<cursos.length; i++) {
      let curso = cursos[i];
      if (curso.id == id) {
        return curso;
      }
    }
    return null
  }
}
