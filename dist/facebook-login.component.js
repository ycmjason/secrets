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
var FacebookLoginComponent = (function () {
    function FacebookLoginComponent() {
        this.app_id = "592108690966233";
        this.redirect_uri = "http://localhost:8080/secret-page/login";
        this.loginUrl = "https://www.facebook.com/dialog/oauth?" +
            "client_id=" + this.app_id + "&" +
            "redirect_uri=" + encodeURIComponent(this.redirect_uri) + "&" +
            "scope=pages_show_list";
    }
    FacebookLoginComponent = __decorate([
        core_1.Component({
            selector: 'facebook-login',
            templateUrl: 'app/facebook-login.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FacebookLoginComponent);
    return FacebookLoginComponent;
}());
exports.FacebookLoginComponent = FacebookLoginComponent;
//# sourceMappingURL=facebook-login.component.js.map