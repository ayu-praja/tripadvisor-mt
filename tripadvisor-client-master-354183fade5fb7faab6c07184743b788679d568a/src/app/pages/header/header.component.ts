import { Component, OnInit } from "@angular/core";
import { TokenStorageService } from "../auth/token-storage.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  roles: string[];
  authority: string;
  constructor(private tokenStorage: TokenStorageService,private router: Router) {}
  isCollapsed;
  image;
  socialLogin:string
  ngOnInit() {
    this.image=localStorage.getItem('photo')
    this.socialLogin=localStorage.getItem('authorization')
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === "ROLE_ADMIN") {
          this.authority = "admin";
          return false;
        } else if (role === "ROLE_PM") {
          this.authority = "pm";
          return false;
        }
        this.authority = "user";
        return true;
      });
    }
    
  }
  flightClicked(){
    window.localStorage.setItem('currentRoute', "/book-flight");
  }
  hotelClicked(){
    window.localStorage.setItem('currentRoute', "/book-hotel");
  }
  holidayClicked()
  {
    window.localStorage.setItem('currentRoute', "/holiday-package");
  }
  logInClicked(){
    window.localStorage.setItem('currentRoute', "/home");
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
