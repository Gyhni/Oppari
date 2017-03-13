import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { Header } from './header/header';
import { Nav } from './nav/nav';
import { Footer } from './footer/footer';

import { Events } from './content/events/events';
import { Home } from './content/home/home';
import { Groups } from './content/groups/groups';
import { Login } from './content/login/login';
import { User } from './content/user/user';
import { Bar } from './content/bar/bar';

import {RoleGuard} from "./security/auth.guard";


@NgModule({
  imports:      [ BrowserModule,
                  routing,
                  FormsModule,
                  HttpModule],
  declarations: [ AppComponent,
                  Header,
                  Nav,
                  Footer,
                  Home,
                  Groups,
                  Events,
                  Login,
                  User,
                  Bar],
  bootstrap:    [ AppComponent ],
  providers: [RoleGuard]
})
export class AppModule { }
