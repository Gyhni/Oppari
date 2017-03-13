import {CanActivate, ActivatedRouteSnapshot, Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class RoleGuard implements CanActivate {
  private userLevelArray = ["admin","manage","user"];
  private userLevel : string;
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let roles = route.data["roles"] as Array<string>;
     this.userLevel = this.userLevelArray[parseInt(localStorage.getItem('currentUserLevel'))-1];
    if(roles.indexOf(this.userLevel) != -1){
      return true;
    }
    else{
      this.router.navigate(['home']);
    }
  }
}
