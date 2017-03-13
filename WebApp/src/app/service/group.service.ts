import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class GroupService{

  constructor(private _http:Http){}
  getGroup(){
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'});
    const opts = new RequestOptions({headers});
    return this._http.post('https://groteskidemo.net/aamumedia/returnGroups.php',{},opts)
      .map((res: any) => res.json())
  }
  selectGroup(userId:any,groupId:any){
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'});
    const opts = new RequestOptions({headers});
    let payload = new URLSearchParams();
    payload.append('userId',userId);
    payload.append('userGroups',groupId);
    return this._http.post('https://groteskidemo.net/aamumedia/updateMobileUser.php',payload,opts)
      .map((res: any) => res.json())
  }
}
