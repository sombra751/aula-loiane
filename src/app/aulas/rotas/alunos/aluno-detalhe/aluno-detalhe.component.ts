import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../service/alunos.service';
import { Aluno } from '../alunos';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit {

  inscricao!: Subscription
  aluno!: any

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit(): void {
     this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);
      }
    );

    // this.inscricao = this.route.data.subscribe(
    //   (info: {aluno: Aluno}) => {
    //     console.log('Recebendo o obj Aluno do resolver');
    //     this.aluno = info.aluno;
    //   }
    // );
  }
 

  editarContato(): void {
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
