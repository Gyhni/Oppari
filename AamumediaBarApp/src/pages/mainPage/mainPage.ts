import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Storage} from '@ionic/storage'

@Component({
  selector: 'page-mainPage',
  templateUrl: 'mainPage.html'
})
export class MainPage {
  userPin: any

  constructor(public navCtrl: NavController, public storage: Storage) {
    this.storage.get('userPin').then((data)=> {
      this.userPin = data;
    })
  }
}
