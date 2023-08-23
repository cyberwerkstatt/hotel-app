import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Bookings } from '../mock-bookings';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})

export class BookingsComponent implements OnInit {
  constructor(){ }

  welcomeText:string = "Deine Buchung";
   
  bookings = Bookings;
  
  ngOnInit(){

  }
  
  
}
