import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos1',
  templateUrl: './cursos1.component.html',
  styleUrls: ['./cursos1.component.scss']
})
export class Cursos1Component implements OnInit {

  cursos:string[] = [];



  constructor(private service: CursosService) {
   }

  ngOnInit(): void {
    this.cursos = this.service.getCursos()
    CursosService.criouNovoCurso.subscribe( curso => this.cursos.push(curso))
  }

}
