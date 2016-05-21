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
var SelectFacebookPageComponent = (function () {
    function SelectFacebookPageComponent(userService) {
        this.userService = userService;
    }
    SelectFacebookPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getPages().then(function (pages) {
            _this.pages = pages;
        });
    };
    SelectFacebookPageComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/select-facebook-page.component.html',
            styleUrls: ['app/select-facebook-page.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], SelectFacebookPageComponent);
    return SelectFacebookPageComponent;
}());
exports.SelectFacebookPageComponent = SelectFacebookPageComponent;
//# sourceMappingURL=select-facebook-page.component.js.map