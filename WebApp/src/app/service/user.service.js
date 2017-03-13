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
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.getUser = function (user, pass) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var opts = new http_1.RequestOptions({ headers: headers });
        var payload = new http_1.URLSearchParams();
        payload.append('username', user);
        payload.append('password', pass);
        return this._http.post('https://groteskidemo.net/aamumedia/loginAdmin.php', payload.toString(), opts)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.createUser = function (currentUser, username, password, access, level, email, points) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' });
        var opts = new http_1.RequestOptions({ headers: headers });
        var payload = new http_1.URLSearchParams();
        payload.append('userId', currentUser);
        payload.append('username', username);
        payload.append('password', password);
        payload.append('access', access);
        payload.append('level', level);
        payload.append('email', email);
        payload.append('userDefaultPoints', points);
        return this._http.post('https://groteskidemo.net/aamumedia/createUser.php', payload.toString(), opts)
            .map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map