import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class GroupService{

  constructor(private _http:Http){}
  sendGroup(currentUser:any,name:any,description:any,organization:any){
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'});
    const opts = new RequestOptions({headers});
    var payload = new URLSearchParams();
    payload.append('userId',currentUser);
    payload.append('groupName',name);
    payload.append('groupDescription',description);
    payload.append('groupOrganization',organization);
    return this._http.post('https://groteskidemo.net/aamumedia/createGroup.php',payload.toString(),opts)
      .map((res: any) => res.json())
  }
}
