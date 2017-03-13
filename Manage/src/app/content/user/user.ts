import {Component} from '@angular/core';
import {UserService} from '../../service/user.service'


@Component({
  providers:[UserService],
  templateUrl: './app/content/user/user.html',
})
export class User{
  bars = JSON.parse(sessionStorage.getItem('currentBarData'));
  access = '';
  onChange(newValue:any) {
    console.log(this.bars);
    this.access = newValue;
  }
  private username: string;
  private password: string;
  private level: string;
  private email: string;
  private points: string;
  constructor(private _userService:UserService){}
  submitUser(){
      this._userService.createUser(sessionStorage.getItem('currentUserId'),this.username, this.password, this.access, this.level, this.email, this.points)
        .subscribe(data => {
          console.log(data);
        })
  }
}
