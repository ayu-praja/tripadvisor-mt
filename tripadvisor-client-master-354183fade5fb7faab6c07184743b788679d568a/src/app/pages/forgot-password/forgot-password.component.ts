import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Changepassword } from "./changepassword";
import { Router } from "@angular/router";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"]
})
export class ForgotPasswordComponent implements OnInit {
  emailOver = true;
  otpSent = false;
  enterOtp = false;
  email: any;
  storedEmail: any;
  OTP: any;
  otp: any;
  rightOtp: boolean;
  password1: string;
  password2: string;
  errorMessage: string;
  otpNotTrue = false;
  invalidMail = false;
  invalidOtp = false;
  statusMessage: string;
  otpOn = true;
  constructor(private service: AuthService, private router: Router) {}
  pwdUpdateMsg: any;
  ngOnInit() {}

  sendOtp() {
    this.errorMessage = "";
    this.statusMessage = "Sending OTP...";
    console.log(this.email);
    this.storedEmail = this.email;
    this.service.sendOtp(this.email).subscribe(
      data => {
        this.statusMessage = "The OTP sent successfully";

        this.emailOver = false;
        this.otpSent = true;
        console.log(data);
        this.OTP = data;
      },
      error => {
        this.statusMessage = "The Entered Email is wrong, please check";
        console.log(error.error.message);
        this.invalidMail = true;
        this.otpOn = false;
        this.errorMessage = error.error.message;
        this.emailOver = true;
      }
    );
  }
  validateOtp() {
    this.statusMessage = "";
    this.otpSent = false;
    this.enterOtp = true;
    if (this.otp == this.OTP) {
      console.log(this.otp);
      console.log("here");
      this.statusMessage = "Done";
      this.rightOtp = true;
      this.otpSent = false;
      // this.otpNotTrue=false
    } else {
      this.statusMessage = "Incorrect OTP";
      // this.otpNotTrue=true
      this.otpSent = true;
      this.rightOtp = false;
      console.log(this.rightOtp);
    }
  }
  updatePassword() {
    if (this.password1 == this.password2) {
      this.statusMessage = "Passowrds matched, updating the password.";
      let changePassword = new Changepassword();
      changePassword.email = this.storedEmail;
      changePassword.password = this.password1;
      this.service.passwordUpdate(changePassword).subscribe(
        data => {
          this.pwdUpdateMsg = data;
          this.statusMessage = "The password is updated Successfully";
          setTimeout(() => {
            
            this.router.navigate(["/auth/login"]);
            
          }, 1000);
          // window.location.reload();
        },
        error => {
          this.statusMessage = "The password not updated";
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      );
    } else {
      this.statusMessage = "The passwords are not matching";
    }
  }
}
