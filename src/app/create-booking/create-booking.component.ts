import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent implements OnInit {

  constructor(private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private bookingService : BookingService) { }

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
      
      this.bookingService.getBookingById(id).subscribe((result => {
        this.booking = result
      }));
      
    }


  }

  save(): void {
    this.bookingService.addBooking(this.booking).subscribe();
    
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
