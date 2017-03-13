import {Component} from '@angular/core';
import {BarService} from "../../service/bar.service";


@Component({
  providers:[BarService],
  templateUrl: './app/content/bar/bar.html',
})
export class Bar{
  private barName:string;
  private barAddress:string;
  private barCity:string;
  private barPostalCode:string;
  private barPhone:string;
  private barEmail:string;
  private barWebsite:string;
  constructor(private _barService:BarService){}
  submitBar(){
    this._barService.sendBar(sessionStorage.getItem('currentUserId'),this.barName,this.barAddress,this.barCity,this.barPostalCode,this.barPhone,this.barEmail,this.barWebsite)
      .subscribe(data => {
        console.log(data);
      })
  }
}
