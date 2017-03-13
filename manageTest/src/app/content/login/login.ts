import {Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {UserService} from '../../service/user.service';


@Component({
  providers:[UserService],
  templateUrl: './login.html',
})
export class Login implements OnInit{
  private userName: string;
  private userPass: string;

  constructor(private _userService:UserService, private router: Router){}

  ngOnInit(){
    console.log(localStorage.getItem('currentUserId'));
    if(localStorage.getItem('currentUserId')){
      this.router.navigate(['home'],{skipLocationChange: true});
    }
  }

  signIn(){
    this._userService.getUser(this.userName,this.userPass)
      .subscribe(data => {
        console.log(data);
        if(data.code == 1){
          localStorage.setItem('currentUserId',data.userId);
          localStorage.setItem('currentUserLevel',data.userLevel);
          localStorage.setItem('currentBarData',JSON.stringify(data.barData));
          console.log(localStorage.getItem('currentBarData'));
          this.router.navigate(['home'],{skipLocationChange: true});
        }
        if(data.code == 2){
          alert(data.message);
        }
      })
  }

}
