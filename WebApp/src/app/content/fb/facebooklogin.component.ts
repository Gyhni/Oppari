import {Component} from '@angular/core';
import {UserService} from "../../service/user.service";
import { Router} from '@angular/router';

declare const FB:any;

@Component({
    selector: 'facebook-login',
    providers:[UserService],
    templateUrl: './facebooklogin.html',
})

export class FacebookLoginComponent{

    constructor(private _userService:UserService, private router: Router) {
        FB.init({
            appId      : '1765904587062329',
            cookie     : false,  // enable cookies to allow the server to access
                                // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.5' // use graph api version 2.5
        });
    }


    onFacebookLoginClick() {
        FB.login(res => {
          if (res.status === 'connected') {
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me?fields=third_party_id', response => {
              console.log('Successful login for: ' + response.id + " ID " + response.third_party_id);
              this._userService.createFBUser(response.id,response.third_party_id)
                .subscribe(() => {
                  this._userService.getFBUser(response.id,response.third_party_id)
                    .subscribe(data =>{
                      if(data.code == 4){
                        sessionStorage.setItem('currentUserId',data.userId);
                        sessionStorage.setItem('currentUserPin',data.userPin);
                        sessionStorage.setItem('currentUserGroups',data.userGroups);
                        console.log(sessionStorage.getItem('currentUserGroups'));
                        if(parseInt(sessionStorage.getItem('currentUserGroups')) > 0){
                          this.router.navigate(['home']);
                        }
                        else{
                          this.router.navigate(['groups']);
                        }
                      }
                    })
                });
            });
          }else if (res.status === 'not_authorized') {
          }else {
          }
        });
    }
}
