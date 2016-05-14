import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { User } from './User';
import { Page } from './Page';

const api_host = "http://192.168.1.82:8080";
@Injectable()
export class UserService {

  private me: Promise<User>;
  private token: string;

  constructor(private http: Http) { }

  submitToken(token){
    this.token = token;
  }

  getMe(): Promise<User> {
    let token = this.token;
    if(!token && !this.me) throw Error('Not logged in yet');

    if(!this.me && token){ // -> only have token
      this.me = new Promise<User>((resolve, reject) => {
        this.http.get(api_host + '/user/me?token='+token)
                 .map((u) => u.json())
                 .map((u) => new User(u.id, u.name, token))
                 .subscribe(resolve, reject);
      });
    }
    return this.me;
  }

  getPages(): Promise<Page> {
    let token = this.token;

    return new Promise<Page>((resolve, reject) => {
      this.http.get(api_host + '/user/me/page?token='+token)
               .map(p => p.json().map(p => new Page(p.id, p.name, p.category)))
               .subscribe(resolve, reject);
    });
  }
}
