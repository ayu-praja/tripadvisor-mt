import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { SignUpInfo } from "../auth/signup-info";
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-registerpage",
  templateUrl: "registerpage.component.html"
})
export class RegisterpageComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  signUpForm: FormGroup;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = "";
  isLoggedIn;
  loggedOut;
  constructor(
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder
  ) {}
  isCollapsed = true;
  focus;
  focus1;
  focus2;

  @HostListener("document:mousemove", ["$event"])
  onMouseMove(e) {
    var squares1 = document.getElementById("square1");
    var squares2 = document.getElementById("square2");
    var squares3 = document.getElementById("square3");
    var squares4 = document.getElementById("square4");
    var squares5 = document.getElementById("square5");
    var squares6 = document.getElementById("square6");
    var squares7 = document.getElementById("square7");
    var squares8 = document.getElementById("square8");

    var posX = e.clientX - window.innerWidth / 2;
    var posY = e.clientY - window.innerWidth / 6;

    squares1.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares2.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares3.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares4.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares5.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares6.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares7.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)";
    squares8.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)";
  }
  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      name: [
        "",
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(25),
          Validators.pattern("^[a-z A-Z]*$")
        ]
      ],
      email: [
        "",
        [
          Validators.required,
         
          Validators.pattern(
            "^[a-zA-Z]{1}[a-zA-Z0-9._%+-]+@[A-Za-z.-]+.[com]{3}$"
          ),
          Validators.email
        ]
      ],
      username: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern("^[a-zA-Z][a-zA-Z0-9.@_#,$,!#$%&'*+/=?^_`{|}~-]+$"),
          Validators.maxLength(25)
        ]
      ],
      password: [
        "",
        [
          Validators.required,
          Validators.maxLength(25),
          Validators.pattern(
            "^(.{0,}(([a-zA-Z][^a-zA-Z])|([^a-zA-Z][a-zA-Z])).{4,})|(.{1,}(([a-zA-Z][^a-zA-Z])|([^a-zA-Z][a-zA-Z])).{3,})|(.{2,}(([a-zA-Z][^a-zA-Z])|([^a-zA-Z][a-zA-Z])).{2,})|(.{3,}(([a-zA-Z][^a-zA-Z])|([^a-zA-Z][a-zA-Z])).{1,})|(.{4,}(([a-zA-Z][^a-zA-Z])|([^a-zA-Z][a-zA-Z])).{0,})$"
          )
        ]
      ]
    });
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");
    this.onMouseMove(event);
  }
  get f() {
    return this.signUpForm.controls;
  }
  onSubmit() {
    this.spinner.show();
    // console.log(this.signUpForm.value);
    let signUpData = new SignUpInfo(
      this.signUpForm.value.name,
      this.signUpForm.value.username,
      this.signUpForm.value.email,
      this.signUpForm.value.password
    );
    // console.log(signUpData.email);

    this.authService.signUp(signUpData).subscribe(
      data => {
        // console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        this.spinner.hide();
      },
      error => {
        this.spinner.hide();

        if (error.error.message.includes("->")) {
          this.errorMessage = error.error.message;
          console.log(this.errorMessage);
        } else {
          this.errorMessage = "Check the credentials again";
        }
        // console.log(this.errorMessage);

        this.isSignUpFailed = true;
      }
    );
  }
}
