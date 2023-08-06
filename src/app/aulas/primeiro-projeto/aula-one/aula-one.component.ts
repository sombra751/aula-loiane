import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aula-one',
  templateUrl: './aula-one.component.html',
  styleUrls: ['./aula-one.component.scss']
})
export class AulaOneComponent implements OnInit {
title = 'Hello word';
num1 = 2
num2 = 3
  constructor() { }

  ngOnInit(): void {
  }

  minhaFunc() {
    return this.num1 * this.num2
  }


}
