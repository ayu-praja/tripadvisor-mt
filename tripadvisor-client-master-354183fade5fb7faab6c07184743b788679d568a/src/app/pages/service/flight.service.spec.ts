import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { FlightService } from "./flight.service";

describe("FlightService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlightService]
    })
  );

  it("should be created", () => {
    const service: FlightService = TestBed.get(FlightService);
    expect(service.getAirportCodes()).toBeTruthy();
  });
  it("should get flights", () => {
    let http;
    let flightService = new FlightService(http);

    expect(flightService.getFlight("HYD", "BLR", 20200101)).toBeTruthy();
  });
  it("should get airport codes", () => {
    let http;
    let flightService = new FlightService(http);
    expect(flightService.getAirportCodes()).toBeTruthy();
  });
});
