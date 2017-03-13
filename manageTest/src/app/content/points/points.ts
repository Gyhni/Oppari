import {Component, OnInit} from '@angular/core';
import {EventService} from "../../service/events.service";
import {GroupService} from "../../service/group.service";
import {PointsService} from "../../service/points.service";

@Component({
  providers:[EventService, GroupService, PointsService],
  templateUrl: './points.html',
})
export class Points implements OnInit{
  private events:any;
  private groups:any;
  private selectedEvent='';
  private selectedGroup='';
  private points:any;
  private clientPin:any;
  constructor(private _eventService:EventService, private _groupService:GroupService, private _pointsService:PointsService){}

  ngOnInit(){
    this._eventService.getEvents(localStorage.getItem('currentUserId'))
      .subscribe(data => {
        console.log(data);
        this.events = data.eventsData;
      });
    this._groupService.getGroups()
      .subscribe(data => {
        console.log(data)
        this.groups = data.groupData
      });
  }

  onChangeE(newValue:any) {
    console.log(newValue)
    this.selectedEvent= newValue;
  }
  onChangeG(newValue:any) {
    console.log(newValue)
    this.selectedGroup= newValue;
  }
  submitPoints(){
    this._pointsService.sendMassPoints(localStorage.getItem('currentUserId'),this.selectedEvent,this.selectedGroup,this.points,this.clientPin)
      .subscribe(data => {
        console.log(data);
        this.points = '';
        this.clientPin = '';
        alert("Pisteet lisätty");
      })
  }

}
