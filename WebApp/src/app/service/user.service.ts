import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class UserService{

  constructor(private _http:Http){}
  getUser(user:any,pass:any){
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    const opts = new RequestOptions({headers});
    let payload = new URLSearchParams();
    payload.append('username',user);
    payload.append('password',pass);
    return this._http.post('https://groteskidemo.net/aamumedia/login.php',payload.toString(),opts)
      .map((res: any) => res.json())
  }

  createUser(username:any,password:any){
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'});
    const opts = new RequestOptions({headers});
    let payload = new URLSearchParams();
    payload.append('username',username);
    payload.append('password',password);
    return this._http.post('https://groteskidemo.net/aamumedia/signUp.php',payload.toString(),opts)
      .map((res: any) => res.json())
  }

  createFBUser(userid:any,userThirdPartyId:any){
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'});
    const opts = new RequestOptions({headers});
    let payload = new URLSearchParams();
    payload.append('username',userid);
    payload.append('authId',userThirdPartyId);
    return this._http.post('https://groteskidemo.net/aamumedia/signUp.php',payload.toString(),opts)
      .map((res: any) => res.json())
  }
  getFBUser(userid:any,userThirdPartyId:any){
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    const opts = new RequestOptions({headers});
    let payload = new URLSearchParams();
    payload.append('username',userid);
    payload.append('authId',userThirdPartyId);
    return this._http.post('https://groteskidemo.net/aamumedia/login.php',payload.toString(),opts)
      .map((res: any) => res.json())
  }

}
