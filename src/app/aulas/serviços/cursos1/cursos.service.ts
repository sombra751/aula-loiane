import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from 'src/app/shared/service/log.service';

@Injectable({
  providedIn: 'root'
})

export class CursosService {

emitirCursoCriado = new EventEmitter<string>()
static criouNovoCurso = new EventEmitter<string>();

private cursos: string[] = ['Angular2', 'Java'];

constructor(private service: LogService) {
}

    getCursos() {
        this.service.consoleLog('Obtendo lista')
        return this.cursos
    }

    addCurso(curso: string) {
        this.service.consoleLog(`criando curso: ${curso}`)
        this.cursos.push(curso)
        this.emitirCursoCriado.emit(curso)
        CursosService.criouNovoCurso.emit(curso)
    }
}