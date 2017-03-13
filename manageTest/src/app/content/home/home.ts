import {Component, OnInit} from '@angular/core';
import {PointsService} from "../../service/points.service";
import {EventService} from "../../service/events.service";

@Component({
  providers:[PointsService,EventService],
  templateUrl: './home.html',
})
export class Home implements OnInit{
  private events:any;
  private selectedEvent = '';
  customer = {
    id :""
  }
  constructor(private _eventService:EventService, private  _pointsService:PointsService){}

  addNum(num:any){
    this.customer.id +=num
  }
  clearNum(){
    this.customer.id="";
  }

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

  submitPoints(){
    console.log("Pisteet lisätty: " + this.customer.id)

      this._pointsService.sendPoints(localStorage.getItem('currentUserId'),this.selectedEvent,this.customer.id)
        .subscribe(data => {
          if(data.code == 1){
            this.customer.id="";
          }
          else{
            alert("Jotain meni pieleen");
          }
        })
  }

}
