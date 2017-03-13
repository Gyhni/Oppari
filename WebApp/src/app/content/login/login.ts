import {Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {UserService} from '../../service/user.service';


@Component({
  selector: 'login',
  providers:[UserService],
  templateUrl: './login.html',
})
export class Login implements OnInit{
  private userName: string;
  private userPass: string;

  constructor(private _userService:UserService, private router: Router){}

  ngOnInit(){
    console.log(sessionStorage.getItem('currentUserGroups'));
    if(sessionStorage.getItem('currentUserGroups')){
      this.router.navigate(['home'],{skipLocationChange: true});
    }
  }

  signIn(){
    this._userService.getUser(this.userName,this.userPass)
      .subscribe(data => {
        console.log(data);
        if(data.code == 1){
          sessionStorage.setItem('currentUserId',data.userId);
          sessionStorage.setItem('currentUserPin',data.userPin);
          sessionStorage.setItem('currentUserGroups',data.userGroups);
          sessionStorage.setItem('currentUserGroupsName',data.userGroupsName);
          this.router.navigate(['home'],{skipLocationChange: true});
        }
        if(data.code == 2){
          alert(data.message);
        }
        if(data.code == 5){
          sessionStorage.setItem('currentUserId',data.userId);
          sessionStorage.setItem('currentUserPin',data.userPin);
          this.router.navigate(['groups'],{skipLocationChange: true});
        }
      })
  }
}
