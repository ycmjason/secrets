import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';

@Component({
  templateUrl: 'app/select-facebook-page.component.html',
  styleUrls: ['app/select-facebook-page.component.css'],
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
