import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }
  fazerLogin(usuario: Usuario) {
    if (usuario.nome == 'joao' &&
      usuario.senha === '12') {

      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true)
      this.router.navigate(['/'])
    } else {
      this.usuarioAutenticado = false
      this.mostrarMenuEmitter.emit(false)
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado
  }
}
