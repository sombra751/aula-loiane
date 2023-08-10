import { AlunosGuard } from './aulas/rotas/guards/alunos.guard';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AulaOneComponent } from './aulas/primeiro-projeto/aula-one/aula-one.component';
import { CursosComponent } from './aulas/primeiro-projeto/cursos/cursos.component';
import { CursoDetalhadoComponent } from './aulas/primeiro-projeto/cursos/curso-detalhado/curso-detalhado.component';
import { DataBindingComponent } from './aulas/data-binding/data-binding.component';
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
import { Cursos1Component } from './aulas/serviços/cursos1/cursos1.component';
import { CriarCursoComponent } from './aulas/serviços/criar-curso/criar-curso.component';
import { ReceberCursoComponent } from './aulas/serviços/receber-curso/receber-curso.component';
import { ExemplosPipesComponent } from './aulas/pipes/exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './aulas/pipes/camel-case/camel-case.pipe';
import { FiltroArrayPipe } from './aulas/pipes/filtro-array/filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './aulas/pipes/filtro-array-impuro/filtro-array-impuro.pipe';
import { HomeComponent } from './aulas/rotas/home/home.component';
import { LoginComponent } from './aulas/rotas/login/login.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './aulas/rotas/header/header.component';
import { AuthService } from './aulas/rotas/login/service/auth.service';
import { AuthGuard } from './aulas/rotas/guards/auth.guard';
import { CursosGuard } from './aulas/rotas/guards/cursos.guard';
import { PaginaNaoEncontradaComponent } from './rotas/pagina-nao-encontrada/pagina-nao-encontrada.component';

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
    Cursos1Component,
    CriarCursoComponent,
    ReceberCursoComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    PaginaNaoEncontradaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    
  ],
  providers: [
    // { provide: LOCALE_ID, useValue: 'en-US' }
    // SettingsService {
    //   provide: LOCALE_ID,
    //   deps: [SettingsService],
    //   useFactory: (settingsService) => settingsService.getLocale()
    // }
    AuthService,
    AuthGuard,
    CursosGuard,
    AlunosGuard
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
