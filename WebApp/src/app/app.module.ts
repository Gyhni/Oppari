import {NgModule, ApplicationRef}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

import { FacebookLoginComponent } from './content/fb/facebooklogin.component'
import { Home } from './content/home/home';
import { Groups } from './content/groups/groups';
import { Login } from './content/login/login';
import {Register} from './content/register/register';

import {AuthGuard} from './security/auth.guard';
import {createNewHosts, removeNgStyles} from '@angularclass/hmr';

@NgModule({
  imports:      [ BrowserModule,
                  routing,
                  FormsModule,
                  HttpModule],
  declarations: [ AppComponent,
                  Home,
                  Groups,
                  Login,
                  Register,
                  FacebookLoginComponent
                ],
  bootstrap:    [ AppComponent ],
  providers: [AuthGuard]
})
export class AppModule {

  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
