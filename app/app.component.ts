import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';

import {LoginComponent} from './login.component';
import { FacebookLoginRedirectComponent } from './facebook-login-redirect.component'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES]
})

@Routes([
  {
    path: '/',
    component: LoginComponent
  },
  {
    path: '/facebook-login-redirect/:token',
    component: FacebookLoginRedirectComponent
  }
])

export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
//    this.router.navigate(['/']);
  }
}
