import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  deletarCiclo: boolean = false

  valor: number = 5
  mudarValor() {
    this.valor ++
  }

  tchau() {
    this.deletarCiclo = true
  }
}
