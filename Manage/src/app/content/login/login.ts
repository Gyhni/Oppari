import {Component} from '@angular/core';
import { Router} from '@angular/router';
import {UserService} from '../../service/user.service';


@Component({
  providers:[UserService],
  templateUrl: './app/content/login/login.html',
})
export class Login{
  private userName: string;
  private userPass: string;

  constructor(private _userService:UserService, private router: Router,){}
  signIn(){
    this._userService.getUser(this.userName,this.userPass)
      .subscribe(data => {
        console.log(data);
        if(data.code == 1){
          sessionStorage.setItem('currentUserId',data.userId);
          sessionStorage.setItem('currentUserLevel',data.userLevel);
          sessionStorage.setItem('currentBarData',JSON.stringify(data.barData));
          console.log(sessionStorage.getItem('currentBarData'));
          this.router.navigate(['home']);
        }
        if(data.code == 2){
          alert(data.message);
        }
      })
  }
}
