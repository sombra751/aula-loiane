import { CanActivateChild, CanLoad } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './aulas/rotas/home/home.component';
import { LoginComponent } from './aulas/rotas/login/login.component';
import { AuthGuard } from './aulas/rotas/guards/auth.guard';
import { CursosGuard } from './aulas/rotas/guards/cursos.guard';
import { AlunosGuard } from './aulas/rotas/guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './rotas/pagina-nao-encontrada/pagina-nao-encontrada.component';


const routes: Routes = [
  {
    path: 'cursos',
    loadChildren: () => import('./aulas/rotas/cursos/curso2/curso2.module')
      .then(m => m.Curso2Module),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'alunos',
    loadChildren: () => import('./aulas/rotas/alunos/alunos.module')
      .then(m => m.AlunosModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
    // canActivateChild: [AlunosGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes,  {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
