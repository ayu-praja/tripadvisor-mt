import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { BookHotelComponent } from './hotel.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from '../header/header.component';
import { BsDatepickerModule, AlertModule } from 'ngx-bootstrap';
import { FooterComponent } from '../footer/footer.component';

describe('BookHotelComponent', () => {
  let component: BookHotelComponent;
  let fixture: ComponentFixture<BookHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,FormsModule,HttpClientTestingModule,AlertModule,RouterTestingModule,BsDatepickerModule],
      declarations: [ BookHotelComponent,HeaderComponent ,FooterComponent],
     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
