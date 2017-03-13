import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class UserService{

  constructor(private _http:Http){}
  getUser(user:any,pass:any){
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    const opts = new RequestOptions({headers});
    var payload = new URLSearchParams();
    payload.append('username',user);
    payload.append('password',pass);
    return this._http.post('https://groteskidemo.net/aamumedia/loginAdmin.php',payload.toString(),opts)
      .map((res: any) => res.json())
  }

  createUser(currentUser:any,username:any,password:any,access:any,level:any,email:any,points:any){
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'});
    const opts = new RequestOptions({headers});
    var payload = new URLSearchParams();
    payload.append('userId',currentUser);
    payload.append('username',username);
    payload.append('password',password);
    payload.append('access',access);
    payload.append('level',level);
    payload.append('email',email);
    payload.append('userDefaultPoints',points);
    return this._http.post('https://groteskidemo.net/aamumedia/createUser.php',payload.toString(),opts)
      .map((res: any) => res.json())
  }

}
