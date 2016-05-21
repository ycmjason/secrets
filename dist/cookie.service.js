"use strict";
// SOURCE: https://github.com/BCJTI/ng2-cookies
// npm not working.. ):
var CookieService = (function () {
    function CookieService() {
    }
    CookieService.prototype.getCookie = function (name) {
        var myWindow = window;
        name = myWindow.escape(name);
        var regexp = new RegExp('(?:^' + name + '|;\\s*' + name + ')=(.*?)(?:;|$)', 'g');
        var result = regexp.exec(document.cookie);
        return (result === null) ? null : myWindow.unescape(result[1]);
    };
    CookieService.prototype.setCookie = function (name, value, expires, path, domain) {
        var myWindow = window;
        var cookieStr = myWindow.escape(name) + '=' + myWindow.escape(value) + ';';
        if (expires) {
            var dtExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
            cookieStr += 'expires=' + dtExpires.toUTCString() + ';';
        }
        if (path) {
            cookieStr += 'path=' + path + ';';
        }
        if (domain) {
            cookieStr += 'domain=' + domain + ';';
        }
        // console.log(cookieStr);
        document.cookie = cookieStr;
    };
    CookieService.prototype.deleteCookie = function (name, path, domain) {
        // If the cookie exists
        if (this.getCookie(name)) {
            this.setCookie(name, '', -1, path, domain);
        }
    };
    return CookieService;
}());
exports.CookieService = CookieService;
//# sourceMappingURL=cookie.service.js.map