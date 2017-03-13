import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class BarService{

  constructor(private _http:Http){}
  sendBar(currentUser:any,name:any,address:any,city:any,code:any,phone:any,email:any,website:any){
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'});
    const opts = new RequestOptions({headers});
    var payload = new URLSearchParams();
    payload.append('userId',currentUser);
    payload.append('barName',name);
    payload.append('barAddress',address);
    payload.append('barCity',city);
    payload.append('barPostalCode',code);
    payload.append('barPhone',phone);
    payload.append('barEmail',email);
    payload.append('barWebsite',website);
    return this._http.post('https://groteskidemo.net/aamumedia/createBar.php',payload.toString(),opts)
      .map((res: any) => res.json())
  }
}
