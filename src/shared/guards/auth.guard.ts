import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from "@angular/router";
import { CommonServices } from "../services/common-services.service";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router, private common: CommonServices, private activatedRoute: ActivatedRoute) {
  }

  public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
      const authInfo = this.common.getLocalData(environment.AUTH_NAME);
      const authenticated = Object.keys(authInfo).length > 0;
      if (!authenticated) {
          //   this.common.toastMsg('info', 'Login Required!');
          this.router.navigate(['sign-in']);
      }
      return authenticated;
  }
}
