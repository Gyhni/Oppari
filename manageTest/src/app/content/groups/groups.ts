import { Component } from '@angular/core';
import {GroupService} from "../../service/group.service";

@Component({
  providers:[GroupService],
  templateUrl: './groups.html',
})
export class Groups  {
  private groupName:string;
  private groupDescription:string;
  private groupOrganization:string;
  constructor(private _groupService:GroupService){}
  submitGroup(){
    this._groupService.sendGroup(localStorage.getItem('currentUserId'),this.groupName,this.groupDescription,this.groupOrganization)
      .subscribe(data => {
        console.log(data);
        this.groupName = '';
        this.groupDescription = '';
        this.groupOrganization = '';
        alert("Ryhmä luotu");
      })
  }


}
