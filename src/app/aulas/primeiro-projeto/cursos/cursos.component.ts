import { Component, OnInit } from '@angular/core';
import { CursosService } from './service/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
nomeDoPortal!: string

cursos: string[] 
  constructor(private service: CursosService) { 
    this.nomeDoPortal = "http://google"
    this.cursos = this.service.getCursos()
  }

  ngOnInit(): void {
  }

}