import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddPackageComponent } from './admin-add-package.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { AlertComponent, AlertModule } from 'ngx-bootstrap';

describe('AdminAddPackageComponent', () => {
  let component: AdminAddPackageComponent;
  let fixture: ComponentFixture<AdminAddPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddPackageComponent ,HeaderComponent,FooterComponent],
      imports:[RouterTestingModule,FormsModule,AlertModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
