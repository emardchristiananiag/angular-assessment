import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: boolean;
  constructor() {
    this.isAuth = false;
   }

  login(email: string, password: string): boolean {
    if (email == "test@example.com" && password == "test") {
      this.isAuth = true;
      return true;
    }
    return false;
  }

  logout() {
    this.isAuth = false;
  }

}
