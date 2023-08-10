import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Curso2Component } from './curso2.component';
import { NaoEncontradoComponent } from "../nao-encontrado/nao-encontrado.component";
import { CursoDetalheComponent } from "../curso-detalhe/curso-detalhe.component";
import { CursosService } from "../service/cursos.service";
import { CursosRoutingModule } from "../route/curso.routing.module";


@NgModule({
    imports: [
        CommonModule,
        CursosRoutingModule
    ],
    exports: [],
    declarations: [
        Curso2Component,
        NaoEncontradoComponent,
        CursoDetalheComponent
    ],
    providers: [CursosService],
})

export class Curso2Module {

}