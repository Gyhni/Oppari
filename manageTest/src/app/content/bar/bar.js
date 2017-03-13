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
var bar_service_1 = require("../../service/bar.service");
var Bar = (function () {
    function Bar(_barService) {
        this._barService = _barService;
    }
    Bar.prototype.submitBar = function () {
        this._barService.sendBar(sessionStorage.getItem('currentUserId'), this.barName, this.barAddress, this.barCity, this.barPostalCode, this.barPhone, this.barEmail, this.barWebsite)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    Bar = __decorate([
        core_1.Component({
            providers: [bar_service_1.BarService],
            templateUrl: './app/content/bar/bar.html',
        }), 
        __metadata('design:paramtypes', [bar_service_1.BarService])
    ], Bar);
    return Bar;
}());
exports.Bar = Bar;
//# sourceMappingURL=bar.js.map