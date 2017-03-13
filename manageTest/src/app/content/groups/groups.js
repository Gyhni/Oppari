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
var group_service_1 = require("../../service/group.service");
var Groups = (function () {
    function Groups(_groupService) {
        this._groupService = _groupService;
    }
    Groups.prototype.submitGroup = function () {
        this._groupService.sendGroup(sessionStorage.getItem('currentUserId'), this.groupName, this.groupDescription, this.groupOrganization)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    Groups = __decorate([
        core_1.Component({
            providers: [group_service_1.GroupService],
            templateUrl: './app/content/groups/groups.html',
        }), 
        __metadata('design:paramtypes', [group_service_1.GroupService])
    ], Groups);
    return Groups;
}());
exports.Groups = Groups;
//# sourceMappingURL=groups.js.map