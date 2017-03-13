import {RouterModule, Routes} from '@angular/router';

import { Home } from './content/home/home';
import { Groups } from './content/groups/groups';
import { Login } from './content/login/login';
import {Register} from './content/register/register';

import {AuthGuard} from "./security/auth.guard";

const appRoutes : Routes = [
  {
    path:'',
    component: Login
  },
  {
    path:'home',
    component: Home,
    canActivate : [AuthGuard]
  },
  {
    path:'groups',
    component:Groups,
    canActivate : [AuthGuard]
  },
  {
    path:'register',
    component: Register,
  }
]
export const routing = RouterModule.forRoot(appRoutes)
