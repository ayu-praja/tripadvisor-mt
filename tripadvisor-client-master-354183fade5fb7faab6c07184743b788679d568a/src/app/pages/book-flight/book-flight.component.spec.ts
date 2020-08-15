import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FlightService } from "../service/flight.service";
import * as moment from "moment";
import { NgxSpinnerService } from "ngx-spinner";
import { BookFlightComponent } from './book-flight.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from '../header/header.component';
import { BsDatepickerModule, AlertModule } from 'ngx-bootstrap';
import { FooterComponent } from '../footer/footer.component';
describe('BookFlightComponent', () => {
  let component: BookFlightComponent;
  let fixture: ComponentFixture<BookFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule,FormsModule,HttpClientTestingModule,RouterTestingModule,BsDatepickerModule,ReactiveFormsModule,FormsModule,AlertModule],
      declarations: [ BookFlightComponent,HeaderComponent ,FooterComponent]
    
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
