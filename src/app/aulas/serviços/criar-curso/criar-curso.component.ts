import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos1/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.scss']
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = []
  constructor(private service: CursosService) { }

  ngOnInit(): void {
  this.cursos = this.service.getCursos()
  }
  addCurso(curso: string) {
    this.service.addCurso(curso)
  }
}
