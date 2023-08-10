import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos1/cursos.service';


@Component({
  selector: 'app-receber-curso',
  templateUrl: './receber-curso.component.html',
  styleUrls: ['./receber-curso.component.scss']
})
export class ReceberCursoComponent implements OnInit {
curso!: string
  constructor(private service: CursosService) { }

  ngOnInit(): void {
    this.service.emitirCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado
    )
  }

}
