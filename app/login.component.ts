import { Component } from '@angular/core';

import {FacebookLoginComponent} from './facebook-login.component';

@Component({
  selector: 'login',
  templateUrl: 'app/login.component.html',
  styleUrls: ['app/login.component.css'],
  directives: [FacebookLoginComponent]
})

export class LoginComponent { }
