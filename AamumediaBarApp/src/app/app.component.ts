import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Login } from '../pages/login/login';
import { MainPage } from '../pages/mainPage/mainPage';
import { Facebook } from 'ionic-native';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = Login;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public storage:Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Etusivu', component: MainPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      //Sisään kirjautunut jo käynnistäessä
      this.storage.get('userPin').then((data)=>{
        if(data!=null){
          this.nav.setRoot(MainPage);
        }
      })
  });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    Facebook.logout().then(()=>{
      alert("Hei hei");
    })
    this.storage.set('userId',null);
    this.storage.set('userPin',null);
    this.nav.setRoot(Login);
  }
}
