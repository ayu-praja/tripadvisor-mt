import { TestBed } from '@angular/core/testing';

import { HotelService } from './hotel.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HotelService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
    providers: [
      HotelService,
    ],
  }));

  it('should be created', () => {
    const service: HotelService = TestBed.get(HotelService);
    expect(service).toBeTruthy();
  });
  it('should be created', () => {
    const service: HotelService = TestBed.get(HotelService);
    expect(service.getHotelCities()).toBeTruthy();
  });
  it('should be created', () => {
    const service: HotelService = TestBed.get(HotelService);
    
    expect(service.getHotels("kakinada")).toBeTruthy(); 
  });
  
});
