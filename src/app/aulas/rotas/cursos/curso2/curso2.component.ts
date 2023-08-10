import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { CursosService } from '../service/cursos.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-curso2',
  templateUrl: './curso2.component.html',
  styleUrls: ['./curso2.component.scss']
})
export class Curso2Component implements OnInit {

  cursos: any[] = [];
  incricao!: Subscription;
  pagina: any;

  constructor(private service: CursosService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.incricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );
    this.cursos = this.service.getCursos();
  }

  ngOnDestroy() {
    this.incricao.unsubscribe();
  }


  proximaPagina() {
    // this.pagina ++
    this.router.navigate(['/cursos'],
      { queryParams: { 'pagina': ++this.pagina } });
  }
}
