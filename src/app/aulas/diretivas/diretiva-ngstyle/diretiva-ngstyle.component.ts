import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.scss']
})
export class DiretivaNgstyleComponent implements OnInit {
ativo: boolean = false
tamanhoFonte: number =15
  constructor() { }

  ngOnInit(): void {
  }
  mudarAtributo() {
    this.ativo = !this.ativo
    this.tamanhoFonte ++ 
  }
}
