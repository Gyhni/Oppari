import { Component} from '@angular/core';
import { Facebook } from 'ionic-native';
import { Storage } from '@ionic/storage'
import { NavController } from 'ionic-angular';
import { MainPage } from '../mainPage/mainPage';
import {Groups} from "../groups/groups";
import { Register } from '../register/register';
import{ HTTP } from 'ionic-native';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class Login {
  user:any;
  pass:any;
  constructor(public navCtrl: NavController, public storage:Storage) {

  }
  login(){
    HTTP.post('https://groteskidemo.net/aamumedia/login.php', {'username':this.user,'password':this.pass}, {})
      .then(data => {
        var response = JSON.parse(data.data);
        if(response.code == 1){

          this.storage.set('userId',response.userId);
          this.storage.set('userPin',response.userPin);
          this.storage.set('userGroups',response.userGroups);
          this.storage.get('userGroups').then(val =>{

            if(parseInt(val)>0){
              this.navCtrl.setRoot(MainPage);
            }
            else{
              this.navCtrl.setRoot(Groups);
            }
          });

        }
        if(response.code == 2){
          alert("Käyttäjä tai salasana väärin");
        }

      },(error)=>{
      alert(JSON.stringify(error.error));
        alert("Error");
    });
  }
  loginFB(){
      Facebook.login(['email']).then((response)=>{
          if(response.status == 'connected'){
            Facebook.api('/' + response.authResponse.userID + '?fields=id,third_party_id',[]).then((response)=>{
              HTTP.post('https://groteskidemo.net/aamumedia/signUp.php', {'username': response.id, 'authId':response.third_party_id}, {})
                .then(data => {

                  HTTP.post('https://groteskidemo.net/aamumedia/login.php', {'username': response.id, 'authId':response.third_party_id}, {})
                    .then(data => {
                      var response = JSON.parse(data.data);
                      if(response.code == 4){

                        this.storage.set('userId',response.userId);
                        this.storage.set('userPin',response.userPin);
                        this.storage.set('userGroups',response.userGroups);
                        this.storage.get('userGroups').then(val =>{

                          if(parseInt(val)>0){
                            this.navCtrl.setRoot(MainPage);
                          }
                          else{
                            this.navCtrl.setRoot(Groups);
                          }
                        });
                      }
                      if(response.code == 3){
                        alert("Käyttäjä tai salasana väärin");
                      }

                    },(error)=>{
                      alert(JSON.stringify(error.error));
                      alert("Error");
                    });

                },(error)=>{
                  alert(JSON.stringify(error.error));
                  alert("Error");
                });
            }, (error)=>{
              alert(JSON.stringify(error));
            })
          }
          else{
            alert('Not logged in')
          }
        })
  }

  register(){
    this.navCtrl.push(Register);
  }
}
