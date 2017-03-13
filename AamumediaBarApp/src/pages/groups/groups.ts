import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Storage} from '@ionic/storage'
import {HTTP} from "ionic-native";
import {MainPage} from "../mainPage/mainPage";

@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html'
})
export class Groups {
  private groups: any;
  constructor(public navCtrl: NavController, public storage: Storage) {
      HTTP.post('https://groteskidemo.net/aamumedia/returnGroups.php', {}, {})
        .then(data => {
          var response = JSON.parse(data.data);
          if(response.code == 1){
            this.groups = response.groupData;
          }
          if(response.code == 2){
            alert("Ryhmien haku meni pieleen");
          }

        },(error)=>{
          alert(JSON.stringify(error.error));
          alert("Error");
        });
    }
    selectGroup(index){
      this.storage.get('userId').then((val)=>{
        alert("Val: " + val + " Index: " + index);
        HTTP.post('https://groteskidemo.net/aamumedia/updateMobileUser.php', {'userId':val,'userGroups':index}, {})
          .then(data => {
            var response = JSON.parse(data.data);
            if(response.code == 1){
              this.navCtrl.setRoot(MainPage);

            }
            if(response.code == 2){
              alert("Päivitys ei onnistunut");
            }

          },(error)=>{
            alert(JSON.stringify(error.error));
            alert("Error");
          });
      })

    }



}
