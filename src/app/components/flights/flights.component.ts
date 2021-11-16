import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TicketApi } from 'src/app/services/ticket-api';
import {FlightApi} from '../../services/flight-api';
import Swal from 'sweetalert2'

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

  getInfo():void {

    let message=`## delete tables with this orders for cascade delete
    - tickets
    - flight
    - airlines
    - customers
    - users
    - countries

    ## insert data with the inverse order for cascade insert
    - countries
    - users
    - customers
    - airlines
    - flights
    - tickets`;

    Swal.fire(message);



  }

  onISub:Subscription=null;
  buyTicket(flight_id) {
     this.onISub=this.ticketApi.insertTicket(flight_id,this.user_id).subscribe((data)=>{
       console.log('data',data);

     })

  }

}
