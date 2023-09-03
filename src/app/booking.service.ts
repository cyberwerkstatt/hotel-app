import { Injectable } from '@angular/core';
import { Bookings } from './mock-bookings';
import { Booking } from './booking';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  getBookings(): Booking[]{
    return Bookings;
  }

  deleteBooking(booking: Booking){
    let index = Bookings.indexOf(booking);
    Bookings.splice(index,1)
  }

  getBookingById(id : number) : Booking{
    let bookingById = Bookings.find(x => x.id == id)!;
    return bookingById;
  }

  addBooking(booking : Booking) : void{
    Bookings.push(booking)
  }

  updateBooking(booking : Booking){
    let currentBooking = this.getBookingById(booking.id)
    currentBooking = booking;
  }
}
