import {Component, OnInit} from '@angular/core';
import {EventService} from "../../service/events.service";

@Component({
  providers:[EventService],
  templateUrl: './score.html',
})
export class Score implements OnInit{
  private events:any;
  private selectedEvent='';
  private link:any;
  constructor(private _eventService:EventService){}

  ngOnInit(){
    this._eventService.getEvents(localStorage.getItem('currentUserId'))
      .subscribe(data => {
        console.log(data);
        this.events = data.eventsData;
      })

  }
  onChange(newValue:any) {
    console.log(newValue)
    this.selectedEvent= newValue;
  }
  createLink(){
    console.log(this.selectedEvent);
    console.log('https://groteskidemo.net/tja/showPoints.php?eventId=' + this.selectedEvent);
    this.link = 'https://groteskidemo.net/tja/showPoints.php?eventId=' + this.selectedEvent;
  }

}
