import { Component, OnInit } from '@angular/core';
import { RouteSegment } from '@angular/router';

import { UserService } from './user.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard.component.html'
})

export class DashboardComponent {
  constructor(private segment: RouteSegment,
              private userService: UserService){
  }

  ngOnInit() {
  }
}
