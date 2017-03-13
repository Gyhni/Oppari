import {Component} from '@angular/core';
import {UserService} from '../../service/user.service'


@Component({
  providers:[UserService],
  templateUrl: './user.html',
})
export class User{
  bars = JSON.parse(localStorage.getItem('currentBarData'));
  access = '';
  onChange(newValue:any) {
    console.log(this.bars);
    this.access = newValue;
  }
  private username: string;
  private password: string;
  private level = '';
  private email: string;
  private points: string;
  constructor(private _userService:UserService){}
  submitUser(){
      this._userService.createUser(localStorage.getItem('currentUserId'),this.username, this.password, this.access, this.level, this.email, this.points)
        .subscribe(data => {
          if(data.code == 1){
            alert("Käyttäjä luotu");
            this.username = '';
            this.password = '';
            this.level = '';
            this.email = '';
            this.points = '';
            this.access = '';
          }
          else{
            alert("Jotain meni pieleen");
          }
        })
  }
  getCSSClassesManage(){
    let cssClasses;
    if(parseInt(localStorage.getItem('currentUserLevel')) == 2){
      cssClasses = {
        'hidden':true
      }
    }
    return cssClasses;
  }
}
