import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AulaOneComponent } from './aulas/primeiro-projeto/aula-one/aula-one.component';
import { CursosComponent } from './aulas/primeiro-projeto/cursos/cursos.component';
import { CursoDetalhadoComponent } from './aulas/primeiro-projeto/cursos/curso-detalhado/curso-detalhado.component';
import { DataBindingComponent } from './aulas/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from './aulas/input-property/input-property.component';
import { OutputPropertyComponent } from './aulas/output-property/output-property.component';
import { CicloComponent } from './aulas/ciclo/ciclo.component';
import { DiretivaNgifComponent } from './aulas/diretivas/diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgSwitchComponent } from './aulas/diretivas/diretiva-ng-switch/diretiva-ng-switch.component';
import { DiretivaNgForComponent } from './aulas/diretivas/diretiva-ng-for/diretiva-ng-for.component';
import { DiretivaNgClassComponent } from './aulas/diretivas/diretiva-ng-class/diretiva-ng-class.component';
import { DiretivaNgstyleComponent } from './aulas/diretivas/diretiva-ngstyle/diretiva-ngstyle.component';
import { OperadorElvisComponent } from './aulas/diretivas/operador-elvis/operador-elvis.component';
import { NgContentComponent } from './aulas/diretivas/ng-content/ng-content.component';
import { FundoAmareloDirective } from './shared/diretivas/fundo-amarelo/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './aulas/diretivas/diretivas-customizadas/diretivas-customizadas.component';
import { HighlightMouseDirective } from './shared/diretivas/highlight-mouse/highlight-mouse.directive';
import { HighlightDirective } from './shared/diretivas/highlight/highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    AulaOneComponent,
    CursosComponent,
    CursoDetalhadoComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
    DiretivaNgifComponent,
    DiretivaNgSwitchComponent,
    DiretivaNgForComponent,
    DiretivaNgClassComponent,
    DiretivaNgstyleComponent,
    OperadorElvisComponent,
    NgContentComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    HighlightMouseDirective,
    HighlightDirective,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
