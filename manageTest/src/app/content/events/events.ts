import { Component } from '@angular/core';
import {EventService} from "../../service/events.service";

@Component({
  providers:[EventService],
  templateUrl: './events.html',
})
export class Events  {
  bars = JSON.parse(localStorage.getItem('currentBarData'));
  access = '';
  onChange(newValue:any) {
    console.log(this.bars);
    this.access = newValue;
  }

  private eventName: string;
  private eventTimeStart: string;
  private eventTimeEnd: string;
  private eventPlace =  JSON.parse(localStorage.getItem('currentBarData'));

  constructor(private _eventService:EventService){}

  eventSubmit(){
    this._eventService.sendEvent(localStorage.getItem('currentUserId'),this.eventName,this.eventTimeStart,this.eventTimeEnd,this.eventPlace[0].barId)
      .subscribe(data => {
        if(data.code == 1){
          alert("Tapahtuma luotu")
          this.eventName = '';
          this.eventTimeStart = '';
          this.eventTimeEnd = '';
        }
        else{
          alert("Jotain meni pieleen");
        }
      })
  }
}
