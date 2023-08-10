import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursoDetalheComponent } from '../curso-detalhe/curso-detalhe.component';
import { Curso2Component } from '../curso2/curso2.component';
import { NaoEncontradoComponent } from '../nao-encontrado/nao-encontrado.component';

const CursosRoutes: Routes = [
  {
    path: '',
    component: Curso2Component
  },
  {
    path: 'naoEncontrado',
    component: NaoEncontradoComponent
  },
  {
    path: ':id',
    component: CursoDetalheComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(CursosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
