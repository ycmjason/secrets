import { Component, OnInit, provide } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common'
import { Routes, Router, ROUTER_DIRECTIVES , ROUTER_PROVIDERS} from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import {LoginComponent} from './login.component';
import {FacebookLoginRedirectComponent} from './facebook-login-redirect.component'
import {SelectFacebookPageComponent} from './select-facebook-page.component'
import {DashboardComponent} from './dashboard.component'

import { UserService } from './user.service';
import { CookieService } from './cookie.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [UserService,
              ROUTER_PROVIDERS,
              provide(LocationStrategy, {useClass: HashLocationStrategy}),
              HTTP_PROVIDERS,
              CookieService]
})

@Routes([
  {
    path: '/',
    component: LoginComponent
  },
  {
    path: '/facebook-login-redirect/:token',
    component: FacebookLoginRedirectComponent
  },
  {
    path: '/select-facebook-page',
    component: SelectFacebookPageComponent
  },
  {
    path: '/dashboard/:id',
    component: DashboardComponent
  }
])

export class AppComponent implements OnInit {
  constructor(private router: Router,
              private userService: UserService,
              private cookieService: CookieService) {}

  ngOnInit() {
    var token = this.cookieService.getCookie('token');
    if(token) {
      this.userService.submitToken(token);
      this.router.navigate(['/select-facebook-page']);
//      this.router.navigate(['/dashboard']);
    }

  }
}
