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
var http_1 = require('@angular/http');
var login_component_1 = require('./login.component');
var facebook_login_redirect_component_1 = require('./facebook-login-redirect.component');
var select_facebook_page_component_1 = require('./select-facebook-page.component');
var dashboard_component_1 = require('./dashboard.component');
var user_service_1 = require('./user.service');
var cookie_service_1 = require('./cookie.service');
var AppComponent = (function () {
    function AppComponent(router, userService, cookieService) {
        this.router = router;
        this.userService = userService;
        this.cookieService = cookieService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var token = this.cookieService.getCookie('token');
        if (token) {
            this.userService.submitToken(token);
            this.router.navigate(['/select-facebook-page']);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [user_service_1.UserService,
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                cookie_service_1.CookieService]
        }),
        router_1.Routes([
            {
                path: '/',
                component: login_component_1.LoginComponent
            },
            {
                path: '/facebook-login-redirect/:token',
                component: facebook_login_redirect_component_1.FacebookLoginRedirectComponent
            },
            {
                path: '/select-facebook-page',
                component: select_facebook_page_component_1.SelectFacebookPageComponent
            },
            {
                path: '/dashboard/:id',
                component: dashboard_component_1.DashboardComponent
            }
        ]), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService, cookie_service_1.CookieService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map