import { TestBed } from '@angular/core/testing';

import { HolidayPackageServiceService } from './holiday-package-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HolidayPackageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
    providers: [
      HolidayPackageServiceService,
    ],
  }));

  it('should be created', () => {
    const service: HolidayPackageServiceService = TestBed.get(HolidayPackageServiceService);
    expect(service).toBeTruthy();
  });
  it('should be created', () => {
    const service: HolidayPackageServiceService = TestBed.get(HolidayPackageServiceService);
    let addPackage={
      packageType:"Test",
      packageName:"Test",
      days:3,
      nights:3,
      budget:3,
      package_image:"test",
      package_description:"test",
      package_highlight:"test" ,
      package_activity:"test"
    }
    expect(service.addPackage(addPackage,"kerala")).toBeTruthy();
  });
  it('should be created', () => {
    const service: HolidayPackageServiceService = TestBed.get(HolidayPackageServiceService);
    expect(service.booking(1,"test","2020-01-02")).toBeTruthy();
  });
  it('should be created', () => {
    const service: HolidayPackageServiceService = TestBed.get(HolidayPackageServiceService);
    expect(service.getHolidayCities()).toBeTruthy();
  });
  it('should be created', () => {
    const service: HolidayPackageServiceService = TestBed.get(HolidayPackageServiceService);
    expect(service.getPackage("Kerala")).toBeTruthy();
  });
  it('should be created', () => {
    const service: HolidayPackageServiceService = TestBed.get(HolidayPackageServiceService);
    expect(service.getWeather("goa")).toBeTruthy();
  });
});
