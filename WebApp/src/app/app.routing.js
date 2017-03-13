"use strict";
var router_1 = require('@angular/router');
var events_1 = require('./content/events/events');
var home_1 = require('./content/home/home');
var groups_1 = require('./content/groups/groups');
var login_1 = require('./content/login/login');
var auth_guard_1 = require("./security/auth.guard");
var user_1 = require("./content/user/user");
var bar_1 = require("./content/bar/bar");
var appRoutes = [
    {
        path: '',
        component: login_1.Login
    },
    {
        path: 'home',
        component: home_1.Home,
        canActivate: [auth_guard_1.RoleGuard],
        data: { roles: ['admin', 'manage', 'user'] }
    },
    {
        path: 'events',
        component: events_1.Events,
        canActivate: [auth_guard_1.RoleGuard],
        data: { roles: ['admin', 'manage'] }
    },
    {
        path: 'groups',
        component: groups_1.Groups,
        canActivate: [auth_guard_1.RoleGuard],
        data: { roles: ['admin', 'manage'] }
    },
    {
        path: 'user',
        component: user_1.User,
        canActivate: [auth_guard_1.RoleGuard],
        data: { roles: ['admin', 'manage'] }
    },
    {
        path: 'bar',
        component: bar_1.Bar,
        canActivate: [auth_guard_1.RoleGuard],
        data: { roles: ['admin'] }
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map