import { Component } from '@angular/core';
import {EventService} from "../../service/events.service";

@Component({
  providers:[EventService],
  templateUrl: './app/content/events/events.html',
})
export class Events  {

  private eventName: string;
  private eventTimeStart: string;
  private eventTimeEnd: string;
  private eventPlace =  JSON.parse(sessionStorage.getItem('currentBarData'));

  constructor(private _eventService:EventService){}

  eventSubmit(){
    this._eventService.sendEvent(sessionStorage.getItem('currentUserId'),this.eventName,this.eventTimeStart,this.eventTimeEnd,this.eventPlace[0].barId)
      .subscribe(data => {
        console.log(data);
      })
  }
}
