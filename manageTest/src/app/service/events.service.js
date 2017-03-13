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
var EventService = (function () {
    function EventService(_http) {
        this._http = _http;
    }
    EventService.prototype.sendEvent = function (currentUser, name, start, end, place) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' });
        var opts = new http_1.RequestOptions({ headers: headers });
        var payload = new http_1.URLSearchParams();
        payload.append('userId', currentUser);
        payload.append('eventName', name);
        payload.append('eventTimeStart', start);
        payload.append('eventTimeEnd', end);
        payload.append('eventPlace', place);
        return this._http.post('https://groteskidemo.net/aamumedia/createEvent.php', payload.toString(), opts)
            .map(function (res) { return res.json(); });
    };
    EventService.prototype.getEvents = function (currentUser) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' });
        var opts = new http_1.RequestOptions({ headers: headers });
        var payload = new http_1.URLSearchParams();
        payload.append('userId', currentUser);
        return this._http.post('https://groteskidemo.net/aamumedia/returnEvents.php', payload.toString(), opts)
            .map(function (res) { return res.json(); });
    };
    EventService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EventService);
    return EventService;
}());
exports.EventService = EventService;
//# sourceMappingURL=events.service.js.map