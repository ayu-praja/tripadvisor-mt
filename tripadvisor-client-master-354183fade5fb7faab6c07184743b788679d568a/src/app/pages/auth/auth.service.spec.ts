import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,AngularFireAuthModule
    ],
    providers: [
     
    ],
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.isLoggedIn).toBeTruthy();
  });
  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.isLoggedIn).toBeFalsy();
  });
  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
   
    let user = {
      uid: 1,
      email: "test",
      name: "test",
      photoURL:"test",
      emailVerified: true
    }
    expect(service.SetUserData(user)).toBeTruthy();
  });
 
});
