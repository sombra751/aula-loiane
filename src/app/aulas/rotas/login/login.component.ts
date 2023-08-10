import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Subscription } from 'rxjs';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   usuario: Usuario = new Usuario();
  inscricao!: Subscription

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }
  fazerLogin() {
  this.authService.fazerLogin(this.usuario)
  }
}
