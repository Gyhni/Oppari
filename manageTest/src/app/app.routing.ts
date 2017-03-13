import {RouterModule, Routes} from '@angular/router';

import { Events } from './content/events/events';
import { Home } from './content/home/home';
import { Groups } from './content/groups/groups';
import { Login } from './content/login/login';
import {RoleGuard} from "./security/auth.guard";
import {User} from "./content/user/user";
import {Bar} from "./content/bar/bar";
import {Score} from "./content/score/score";
import {Points} from "./content/points/points";

const appRoutes : Routes = [
  {
    path:'',
    component: Login
  },
  {
    path:'home',
    component: Home,
    canActivate : [RoleGuard],
    data: {roles:['admin','manage','user']}
  },
  {
    path:'events',
    component: Events,
    canActivate : [RoleGuard],
    data: {roles:['admin','manage']}
  },
  {
    path:'groups',
    component:Groups,
    canActivate : [RoleGuard],
    data: {roles:['admin','manage']}
  },
  {
    path:'user',
    component:User,
    canActivate : [RoleGuard],
    data: {roles:['admin','manage']}
  },
  {
    path:'bar',
    component:Bar,
    canActivate : [RoleGuard],
    data: {roles:['admin']}
  },
  {
    path:'score',
    component:Score,
    canActivate : [RoleGuard],
    data: {roles:['admin','manage']}
  },
  {
    path:'points',
    component:Points,
    canActivate : [RoleGuard],
    data: {roles:['admin','manage']}
  },
  {
    path: '**',
    component: Login
  }
]
export const routing = RouterModule.forRoot(appRoutes)
