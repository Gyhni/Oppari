import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {GroupService} from "../../service/group.service";

@Component({
  selector: 'groups',
  providers:[GroupService],
  templateUrl: './groups.html',
})
export class Groups implements OnInit{

  constructor(private _groupService:GroupService, private router: Router){}
  private groups: any;

  ngOnInit(){
    this._groupService.getGroup()
      .subscribe(
        data => {
          console.log(data.groupData);
          this.groups = data.groupData;
        },error => {
          console.log("Error" + error);
        },
        () => {
          console.log("Complete")
        });
    alert("Hei kirjaudut sisään ensimmäistä kertaa. Valitse ryhmäsi");
  }
  selectGroup(index:any,groupName:any){
    console.log(index);
    this._groupService.selectGroup(sessionStorage.getItem('currentUserId'),index)
      .subscribe(data => {
        console.log(data);
        if (data.code == 1){
          sessionStorage.setItem('currentUserGroups',index);
          sessionStorage.setItem('currentUserGroupsName',groupName);
          this.router.navigate(['home'],{skipLocationChange: true});
        }
      })
  }


}
