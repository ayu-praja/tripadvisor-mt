import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayPackageComponent } from './holiday-package.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule, AlertComponent } from 'ngx-bootstrap';

describe('HolidayPackageComponent', () => {
  let component: HolidayPackageComponent;
  let fixture: ComponentFixture<HolidayPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule,RouterTestingModule, FormsModule,BsDatepickerModule],
      declarations: [ HolidayPackageComponent,HeaderComponent,FooterComponent,AlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should book', () => {
    const component: HolidayPackageComponent = TestBed.get(HolidayPackageComponent);
    expect(component.booking()).toBeTruthy();
  });
  it('should book', () => {
    const component: HolidayPackageComponent = TestBed.get(HolidayPackageComponent);
    expect(component.cardDetailsForm).toBeTruthy();
  });
  it('should book', () => {
    const component: HolidayPackageComponent = TestBed.get(HolidayPackageComponent);
    expect(component.openNav("data")).toBeTruthy();
  });
});
