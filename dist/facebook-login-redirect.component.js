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
var router_1 = require('@angular/router');
var user_service_1 = require('./user.service');
var cookie_service_1 = require('./cookie.service');
var FacebookLoginRedirectComponent = (function () {
    function FacebookLoginRedirectComponent(segment, userService, router, cookieService) {
        this.segment = segment;
        this.userService = userService;
        this.router = router;
        this.cookieService = cookieService;
    }
    FacebookLoginRedirectComponent.prototype.ngOnInit = function () {
        var token = this.segment.getParam('token');
        this.cookieService.setCookie('token', token);
        this.userService.submitToken(token);
        this.router.navigate(['/select-facebook-page']);
    };
    FacebookLoginRedirectComponent = __decorate([
        core_1.Component({
            selector: 'facebook-login-redirect',
            template: 'redirecting...'
        }), 
        __metadata('design:paramtypes', [router_1.RouteSegment, user_service_1.UserService, router_1.Router, cookie_service_1.CookieService])
    ], FacebookLoginRedirectComponent);
    return FacebookLoginRedirectComponent;
}());
exports.FacebookLoginRedirectComponent = FacebookLoginRedirectComponent;
//# sourceMappingURL=facebook-login-redirect.component.js.map