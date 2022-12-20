import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { LoginComponent } from "src/app/@shared/components/login/login.component";
import { LoginDTO, RegisterDTO, User } from "src/app/models/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {

  springBootUrl = 'http://localhost:8080/';


  constructor(private router: Router) {}

  login(loginData: LoginDTO) {

    console.log('auth service.ts', loginData);
    return this.http.get(`${this.springBootUrl + 'users/login/'}${loginData.username}/${loginData.password}`);

    const response: User = {
      name: "Paolino",
      surname: "Paperino",
      username: "paolino504"
    };

    localStorage.setItem("user", JSON.stringify(response));

    return of ('login ok');


  }
  register(registerData: RegisterDTO) {

    this.router.navigateByUrl("/")
    return this.http.post<RegisterDTO>(`${this.springBootUrl + 'utility/registrazione'}`, registerData);

    // TODO Chiamare il servizio per la registrazione e redirigere l'utente alla root per il login
    this.router.navigateByUrl("/");
  }

  logout() {
    localStorage.removeItem("user");
  }

  isAuthenticated() {
    return !!localStorage.getItem("user");
  }

  getCurrentUser() {
    const user = JSON.parse(localStorage.getItem("user") || '') as User;
    return user;
  }
}
