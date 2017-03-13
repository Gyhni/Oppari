import {Component} from '@angular/core';
import {BarService} from "../../service/bar.service";


@Component({
  providers:[BarService],
  templateUrl: './bar.html',
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
    this._barService.sendBar(localStorage.getItem('currentUserId'),this.barName,this.barAddress,this.barCity,this.barPostalCode,this.barPhone,this.barEmail,this.barWebsite)
      .subscribe(data => {
        if(data.code == 1){
          alert("Baari luotu");
          this.barName = "";
          this.barAddress = "";
          this.barCity = "";
          this.barPostalCode = "";
          this.barPhone = "";
          this.barEmail = "";
          this.barWebsite = "";
        }
        else{
          alert("Jotain meni pieleen");
        }
      })
  }
}
