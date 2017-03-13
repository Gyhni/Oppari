import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: './home.html',
})
export class Home implements OnInit{
  private currentUserId:any
  private currentUserGroupName:any
  ngOnInit(){
    this.currentUserId = sessionStorage.getItem('currentUserPin');
    this.currentUserGroupName = sessionStorage.getItem('currentUserGroupsName');
  }

}
