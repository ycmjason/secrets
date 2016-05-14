import { Component } from '@angular/core';
import { RouteSegment } from '@angular/router';

@Component({
  selector: 'facebook-login-redirect',
  template: 'redirecting...'
})

export class FacebookLoginRedirectComponent { 
  constructor(private segment: RouteSegment){
    var token = segment.getParam('token');
    console.log(token);
  }
}
