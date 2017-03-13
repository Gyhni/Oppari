import {Component} from '@angular/core';
import {UserService} from '../../service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'register',
  providers:[UserService],
  templateUrl: './register.html',
})
export class Register{
  private username: string;
  private password: string;
  private rePassword: string;

  constructor(private _userService:UserService, private router: Router){}
  submitUser(){
    if(this.password == this.rePassword){
      this._userService.createUser(this.username, this.password)
        .subscribe(data => {
          console.log(data);
          this.router.navigate([''],{skipLocationChange: true});
        })
    }
    else{
      alert("Salasana ei täsmää");
    }
  }
  goBack(){
    this.router.navigate([''],{skipLocationChange: true});
  }
}
