import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { UserService } from './user.service';

@Component({
  templateUrl: 'app/select-facebook-page.component.html',
  styleUrls: ['app/select-facebook-page.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class SelectFacebookPageComponent { 
  public pages;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getPages().then((pages) => {
      this.pages = pages;
    });
  }
}
