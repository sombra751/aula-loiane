import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../service/alunos.service';
import { IFormCanDeactiate } from '../../guards/interface-form-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactiate {

  incricao!: Subscription
  aluno: any = {}
  private formMudou: boolean = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunosService
  ) { }

  ngOnInit(): void {
    this.incricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id']

        this.aluno = this.alunoService.getAluno(id)

        if (this.aluno == null) {
          this.aluno = {};
        }
      }
    );
  }

  ngOnDestroy() {
    this.incricao.unsubscribe();
  }


  onInput() {
    this.formMudou = true
    console.log("mudou")
  }

  podeMudarRota() {
    if(this.formMudou) {
      confirm('Tem certeza que seja sair dessa página')
    }
    return  true
  }

  podeDesativar() {
    return this.podeMudarRota()
  }
}
