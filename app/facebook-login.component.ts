import { Component } from '@angular/core';

@Component({
  selector: 'facebook-login',
  templateUrl: 'app/facebook-login.component.html'
})

export class FacebookLoginComponent {
  app_id: string;
  redirect_uri: string;
  loginUrl: string;
  constructor(){
    this.app_id = "592108690966233";
    this.redirect_uri = "http://localhost:8080/secret-page/login";

    this.loginUrl = "https://www.facebook.com/dialog/oauth?" +
               "client_id=" + this.app_id + "&" + 
               "redirect_uri=" + encodeURIComponent(this.redirect_uri) + "&" +
               "scope=pages_show_list";
  }
}
