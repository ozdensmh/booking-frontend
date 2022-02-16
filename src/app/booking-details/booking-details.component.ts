import { Component, OnInit,Input } from '@angular/core';
import {RetrieveBooking} from "../types"
@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  panelOpenState:boolean= false;
  @Input() bookingDetails : any;

  bookingCode:string='';
  customerName:string='';
  type:string='';
  duration: string='';
  departureCity: string='';
  departureIATACode:string='';
  arriveCity: string='';
  arriveCityIATACode:string='';
  departureHour:string='';
  arriveHour:string='';

  constructor() { }

  ngOnInit(): void {
    const retrievedData=this.bookingDetails.retrieveBooking;
    this.bookingCode=retrievedData.bookingCode;
    this.customerName=retrievedData.passengers.firstName+' '+retrievedData.passengers.lastName ;
    this.type=this.getHowManyWays(retrievedData.itinerary.type);
    this.duration=this.secondsToHms(retrievedData.itinerary.connections[0]?.duration);
    this.departureCity=retrievedData.itinerary.connections[0].segments[0].departFrom.city.name;
    this.departureIATACode=retrievedData.itinerary.connections[0].segments[0].departFrom.IATACode;
    this.arriveCity=retrievedData.itinerary.connections[0].segments[0].arriveOn.city.name;
    this.arriveCityIATACode=retrievedData.itinerary.connections[0].segments[0].arriveOn.IATACode;
    this.arriveHour=this.handleIsoDateTimeConversion(retrievedData.itinerary.connections[0].segments[0].marketingFlight.operatingFlight.localScheduledArrival);
    this.arriveHour=this.handleIsoDateTimeConversion(retrievedData.itinerary.connections[0].segments[0].marketingFlight.operatingFlight.localScheduledDeparture);
  }

  secondsToHms =(num:String)=> {
    var d = Number(num);
    var h = Math.floor(d / 60);
    var m = Math.floor(d % 60 / 60);
    var s = Math.floor(d % 60 % 60);
  
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay; 
  }

  getHowManyWays=(type:string):string=>{
    if(type==="ONE_WAY"){
      return "1 stop";
    }
    return '';
  }

  handleIsoDateTimeConversion=(isoFormat:string):string=>{
    var isoDateTime = new Date(isoFormat);
    var localDateTime = isoDateTime.toLocaleDateString() + " " + isoDateTime.toLocaleTimeString();
    return localDateTime;
  }

}
