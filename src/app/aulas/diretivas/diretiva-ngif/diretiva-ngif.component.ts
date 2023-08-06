import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss']
})
export class DiretivaNgifComponent implements OnInit {

cursos: string[] = ['joao', 'vitor']
mostraCursos: boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  onMostrarCursos() {
    this.mostraCursos =  !this.mostraCursos
  }
}
