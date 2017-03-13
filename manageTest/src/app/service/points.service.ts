import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class PointsService{

  constructor(private _http:Http){}
  sendPoints(currentUser:any,selectedEvent:any,customerId:any){
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'});
    const opts = new RequestOptions({headers});
    var payload = new URLSearchParams();
    payload.append('userId',currentUser);
    payload.append('eventId',selectedEvent);
    payload.append('clientPin',customerId);
    return this._http.post('https://groteskidemo.net/aamumedia/setPoints.php',payload.toString(),opts)
      .map((res: any) => res.json())
  }
  sendMassPoints(currentUser:any,selectedEvent:any,groupId:any,pointAmount:any,clientPin:any){
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'});
    const opts = new RequestOptions({headers});
    var payload = new URLSearchParams();
    payload.append('userId',currentUser);
    payload.append('eventId',selectedEvent);
    payload.append('groupId',groupId);
    payload.append('points',pointAmount);
    payload.append('clientPin',clientPin);
    return this._http.post('https://groteskidemo.net/aamumedia/setPointsMass.php',payload.toString(),opts)
      .map((res: any) => res.json())
  }
}
