import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Booking } from './booking';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){ 
    const bookings: Booking[] = [
      {
          id: 1,
          name: "Sasha Seslija",
          roomNumber: 100,
          startDate: new Date(),
          endDate: new Date("2024-07-21")
      },
      {
          id: 2,
          name: "Hans Meier",
          roomNumber: 130,
          startDate: new Date(),
          endDate: new Date("2024-07-21")
      },
      {
          id: 3,
          name: "Peter Tag",
          roomNumber: 120,
          startDate: new Date(),
          endDate: new Date("2024-07-21")
      },
      {
          id: 4,
          name: "Thomas Müller",
          roomNumber: 110,
          startDate: new Date(),
          endDate: new Date("2024-07-21")
      }
    ]

    return {bookings};
  }

  constructor() { }
}
