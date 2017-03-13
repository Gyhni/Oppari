import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class RoleGuard implements CanActivate {
  private userLevelArray = ["admin","manage","user"];
  private userLevel : string;
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let roles = route.data["roles"] as Array<string>;
     this.userLevel = this.userLevelArray[parseInt(sessionStorage.getItem('currentUserLevel'))-1];
    if(roles.indexOf(this.userLevel) != -1){
    return true;
    }
  }
}
