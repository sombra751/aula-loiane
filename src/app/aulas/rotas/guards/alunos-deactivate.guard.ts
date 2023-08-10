import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { IFormCanDeactiate } from './interface-form-candeactivate';


@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactiate> {
    canDeactivate(
        component: IFormCanDeactiate,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> | Promise<boolean> | boolean {

        console.log('deactivate ativado')
        return component.podeDesativar()
        // return  component.podeMudarRota()

    }
}
