import { Injectable, NgZone } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

import { JwtResponse } from "./jwt-response";
import { AuthLoginInfo } from "./login-info";
import { SignUpInfo } from "./signup-info";
import { Api } from "src/assets/Api";
import { Changepassword } from "../forgot-password/changepassword";
import { Router } from "@angular/router";
import { User } from "./User";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isLoggedIn: boolean | Observable<boolean> | Promise<boolean>;
  api = new Api();
  private loginUrl = this.api.baseUrl + "/api/auth/signin";
  private signupUrl = this.api.baseUrl + "/api/auth/signup";

  constructor(
    private http: HttpClient,
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public ngZone: NgZone,
    public router: Router
  ) {}

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    this.isLoggedIn = true;
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(signUpForm: any): Observable<string> {
    return this.http.post<string>(this.signupUrl, signUpForm, httpOptions);
  }

  sendOtp(email: any) {
    return this.http.post(
      this.api.baseUrl + "/forgatepassword/sendmail",
      email
    );
  }
  AuthLogin(provider) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(result => {
        this.ngZone.run(() => {
          this.router.navigate([window.localStorage.getItem("currentRoute")]);
        });
        this.SetUserData(result.user);
      })
      .catch(error => {
        window.alert(error);
      });
  }

  passwordUpdate(changePassword: Changepassword) {
    return this.http.post(
      this.api.baseUrl + "/forgatepassword/update",
      changePassword
    );
  }
  GoogleAuth() {
    this.isLoggedIn = true;
    this.afAuth.authState.subscribe(user => {
      if (user) {
        window.localStorage.setItem("authorization", user.displayName);
        window.localStorage.setItem("name", user.displayName);
        window.localStorage.setItem("photo", user.photoURL);
        window.localStorage.setItem("email", user.email);
      } else {
        localStorage.setItem("user", null);
      }
    });
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }
}
