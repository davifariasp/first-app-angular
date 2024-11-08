import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router) { }

  login() {
    localStorage.setItem("token", "123456");

    console.log("Login efetuado com sucesso!");
    console.log(localStorage.getItem("token"));

    this.router.navigate(['']);
  }
}
