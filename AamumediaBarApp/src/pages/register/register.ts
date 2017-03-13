import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from 'ionic-native';
import {MainPage} from "../mainPage/mainPage";

@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})
export class Register {

  email: any;
  password: any;
  rePassword: any;
    constructor(public navCtrl: NavController) {

    }

    createUser(){
      if(this.password == this.rePassword)
      {
        HTTP.post('https://groteskidemo.net/aamumedia/signUp.php', {'username': this.email, 'password':this.password}, {})
          .then(data => {
            this.navCtrl.setRoot(MainPage);

          },(error)=>{
          alert(JSON.stringify(error.status));
          alert(JSON.stringify(error.error));
          alert(JSON.stringify(error.headers));
            alert("Error");
        });
      }
      else{
        alert("Salasana ei vastaa uudelleen kirjoitettua salasanaa");
      }
    }


}
