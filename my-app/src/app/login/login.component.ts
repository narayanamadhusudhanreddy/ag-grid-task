import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    if (this.username && this.password) {
      const user = { username: this.username, role: this.username === 'admin' ? 'admin' : 'employee' };
      sessionStorage.setItem('loggedInUser', JSON.stringify(user));
    }
    this.router.navigateByUrl('/employee');
  }
}
