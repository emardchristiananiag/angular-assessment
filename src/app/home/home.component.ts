import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router, private auth: AuthService) {}

  logout() {
    if(confirm("Are you sure you want to logout?")) {
      this.auth.logout();
    }
  }
}
