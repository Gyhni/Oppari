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
var points_service_1 = require("../../service/points.service");
var events_service_1 = require("../../service/events.service");
var Home = (function () {
    function Home(_eventService, _pointsService) {
        this._eventService = _eventService;
        this._pointsService = _pointsService;
        this.customer = {
            id: ""
        };
    }
    Home.prototype.addNum = function (num) {
        this.customer.id += num;
    };
    Home.prototype.clearNum = function () {
        this.customer.id = "";
    };
    Home.prototype.ngOnInit = function () {
        var _this = this;
        this._eventService.getEvents(sessionStorage.getItem('currentUserId'))
            .subscribe(function (data) {
            console.log(data);
            _this.events = data.eventsData;
        });
    };
    Home.prototype.onChange = function (newValue) {
        console.log(newValue);
        this.selectedEvent = newValue;
    };
    Home.prototype.submitPoints = function () {
        console.log("Pisteet lisätty: " + this.customer.id);
        this._pointsService.sendPoints(sessionStorage.getItem('currentUserId'), this.selectedEvent, this.customer.id)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    Home = __decorate([
        core_1.Component({
            providers: [points_service_1.PointsService, events_service_1.EventService],
            templateUrl: './app/content/home/home.html',
        }), 
        __metadata('design:paramtypes', [events_service_1.EventService, points_service_1.PointsService])
    ], Home);
    return Home;
}());
exports.Home = Home;
//# sourceMappingURL=home.js.map