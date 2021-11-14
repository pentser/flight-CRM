import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TicketApi } from 'src/app/services/ticket-api';
import {FlightApi} from '../../services/flight-api';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  flights=null;
  rule="";
  user_id="";
  onSub:Subscription=null;
  constructor(public flightApi:FlightApi,private ticketApi:TicketApi) {

   }

  ngOnInit(): void {

    this.onSub=this.flightApi.readCookie().subscribe((data)=>{

      console.log(data)
      if(data['cookies']['jwt']){
        this.rule=data['cookies']['user']['rule'];
        this.user_id=data['cookies']['user']['id'];
       }

    })

  }

  onISub:Subscription=null;
  buyTicket(flight_id) {
     this.onISub=this.ticketApi.insertTicket(flight_id,this.user_id).subscribe((data)=>{
       console.log('data',data);

     })

  }

}
