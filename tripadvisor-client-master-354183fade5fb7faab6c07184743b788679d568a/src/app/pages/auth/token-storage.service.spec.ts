import { TestBed } from '@angular/core/testing';

import { TokenStorageService } from './token-storage.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

describe('TokenStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,AngularFirestore,AngularFireAuthModule,AngularFirestore,AngularFireModule.initializeApp(environment.firebase)
    ],
    providers: [
      TokenStorageService,
    ],
  }));

  it('should be created', () => {
    const service: TokenStorageService = TestBed.get(TokenStorageService);
    expect(service).toBeTruthy();
  });
  it('should be created', () => {
    const service: TokenStorageService = TestBed.get(TokenStorageService);
    expect(service.getAuthorities()).toBeTruthy();
  });
  it('should be created', () => {
    const service: TokenStorageService = TestBed.get(TokenStorageService);
    expect(service.getAuthorities()).toBeDefined();
  });
  it('should be created', () => {
    const service: TokenStorageService = TestBed.get(TokenStorageService);
    expect(service.saveAuthorities).toBeTruthy();
  });
  it('should be created', () => {
    const service: TokenStorageService = TestBed.get(TokenStorageService);
    expect(service.signOut()).toBeTruthy();
  });
});
