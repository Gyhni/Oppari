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
var platform_browser_1 = require('@angular/platform-browser');
var app_routing_1 = require('./app.routing');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var header_1 = require('./header/header');
var nav_1 = require('./nav/nav');
var footer_1 = require('./footer/footer');
var events_1 = require('./content/events/events');
var home_1 = require('./content/home/home');
var groups_1 = require('./content/groups/groups');
var login_1 = require('./content/login/login');
var user_1 = require('./content/user/user');
var bar_1 = require('./content/bar/bar');
var auth_guard_1 = require("./security/auth.guard");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                app_routing_1.routing,
                forms_1.FormsModule,
                http_1.HttpModule],
            declarations: [app_component_1.AppComponent,
                header_1.Header,
                nav_1.Nav,
                footer_1.Footer,
                home_1.Home,
                groups_1.Groups,
                events_1.Events,
                login_1.Login,
                user_1.User,
                bar_1.Bar],
            bootstrap: [app_component_1.AppComponent],
            providers: [auth_guard_1.RoleGuard]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map