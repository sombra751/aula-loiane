import { AlunosService } from './../service/alunos.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Aluno } from '../alunos';

@Injectable()

export class AlunoDetalheResolver implements Resolve<Aluno> {

    constructor(private alunosService: AlunosService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
     Observable<any> | Promise<any> | any {
        let id = route.params['id'];
        
        return this.alunosService.getAluno(id)
    }
}