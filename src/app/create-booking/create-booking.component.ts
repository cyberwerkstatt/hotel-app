import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Bookings } from '../mock-bookings';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  booking: Booking = {
    id: 100,
    name: "Your Name",
    roomNumber: 110,
    startDate: new Date(),
    endDate: new Date()
  }

  ngOnInit(): void {
    if (this.router.url != "/create") {
      let id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
      let bookingById = Bookings.find(x => x.id == id)!;
      this.booking = bookingById
    }


  }

  save(): void {
    let bookingById = Bookings.find(x => x.id == this.booking.id);
    if (bookingById == null || bookingById == undefined) {
      Bookings.push(this.booking)
    } else {
      bookingById = this.booking;
    }
    this.router.navigate(["bookings"])

  }

  deleteBooking(){
    let bookingById = Bookings.findIndex(x => x.id == this.booking.id)!;
    Bookings.splice(bookingById,1);
    this.router.navigate(["bookings"])  
  }

  dateChanged(event: Event, isStart: Boolean) {
    let val = (event.target as HTMLInputElement).value;

    if (isStart) {
      this.booking.startDate = new Date(val)
    } else {
      this.booking.endDate = new Date(val)
    }
  }



}
