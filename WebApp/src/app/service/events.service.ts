import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class EventService{

  constructor(private _http:Http){}
  sendEvent(currentUser:any,name:any,start:any,end:any,place:any){
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'});
    const opts = new RequestOptions({headers});
    var payload = new URLSearchParams();
    payload.append('userId',currentUser);
    payload.append('eventName',name);
    payload.append('eventTimeStart',start);
    payload.append('eventTimeEnd',end);
    payload.append('eventPlace',place);
    return this._http.post('https://groteskidemo.net/aamumedia/createEvent.php',payload.toString(),opts)
      .map((res: any) => res.json())
  }
  getEvents(currentUser:any){
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'});
    const opts = new RequestOptions({headers});
    var payload = new URLSearchParams();
    payload.append('userId',currentUser);
    return this._http.post('https://groteskidemo.net/aamumedia/returnEvents.php',payload.toString(),opts)
      .map((res: any) => res.json())
  }
}
