import { Component, OnInit } from '@angular/core';
import { Router, RouteSegment } from '@angular/router';

import { UserService } from './user.service';
import { CookieService } from './cookie.service';

@Component({
  selector: 'facebook-login-redirect',
  template: 'redirecting...'
})

export class FacebookLoginRedirectComponent { 
  constructor(private segment: RouteSegment,
              private userService: UserService,
              private router: Router,
              private cookieService: CookieService){
  }

  ngOnInit() {
    var token = this.segment.getParam('token');
    this.cookieService.setCookie('token', token);
    this.userService.submitToken(token);
    this.router.navigate(['/select-facebook-page']);
  }
}
