import { NgModule, ErrorHandler } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { MainPage } from '../pages/mainPage/mainPage';
import { Register } from '../pages/register/register';
import { Groups } from '../pages/groups/groups';

@NgModule({
  declarations: [
      MyApp,
      Login,
      MainPage,
      Register,
      Groups
  ],
  imports: [
      IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      MyApp,
      Login,
      MainPage,
      Register,
      Groups
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage]
})
export class AppModule {}
