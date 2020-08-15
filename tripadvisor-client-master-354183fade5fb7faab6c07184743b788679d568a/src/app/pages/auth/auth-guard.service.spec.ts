import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';

import { AuthGuardService } from './auth-guard.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

describe('AuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,RouterTestingModule,AngularFireAuthModule,AngularFireModule.initializeApp(environment.firebase)
    ],
    providers: [
      AuthGuardService,
    ],
    

  }));

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });
  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service.authority.match("USER"));
  });
 
  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service.roles).toBeDefined();
    expect(service.canActivate).toBeFalsy;
    expect(service.canActivate).toBeTruthy;
  });
  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service.canActivate).toBeFalsy;
  });
  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    
    expect(service.canActivate).toBeTruthy;
  });
  

});
