import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { TokenStorageService } from "./token-storage.service";
@Injectable({
  providedIn: "root"
})
export class AuthGuardService {
  roles: string[];
  authority: string;
  constructor(private authStorage: AuthService, private _router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (sessionStorage.length === 0 && !localStorage.getItem('authorization')) {      
      this._router.navigate(["/auth/login"]);     
      return false;
    }    
    else {
      return true;
    }
  }
}
