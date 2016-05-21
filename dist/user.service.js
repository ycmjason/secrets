"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var User_1 = require('./User');
var Page_1 = require('./Page');
var api_host = "http://localhost:8080";
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.submitToken = function (token) {
        this.token = token;
    };
    UserService.prototype.getMe = function () {
        var _this = this;
        var token = this.token;
        if (!token && !this.me)
            throw Error('Not logged in yet');
        if (!this.me && token) {
            this.me = new Promise(function (resolve, reject) {
                _this.http.get(api_host + '/user/me?token=' + token)
                    .map(function (u) { return u.json(); })
                    .map(function (u) { return new User_1.User(u.id, u.name, token); })
                    .subscribe(resolve, reject);
            });
        }
        return this.me;
    };
    UserService.prototype.getPages = function () {
        var _this = this;
        var token = this.token;
        return new Promise(function (resolve, reject) {
            _this.http.get(api_host + '/user/me/page?token=' + token)
                .map(function (p) { return p.json().map(function (p) { return new Page_1.Page(p.id, p.name, p.category); }); })
                .subscribe(resolve, reject);
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map