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
  username="";
  customer_id="";
  onSub:Subscription=null;
  constructor(public flightApi:FlightApi,private ticketApi:TicketApi) {
    this.onCsub=this.ticketApi.getCustomerId(this.username).subscribe((data)=>{
      this.customer_id=data['id'];
   })

   }

  ngOnInit(): void {

    this.onSub=this.flightApi.readCookie().subscribe((data)=>{

      console.log(data)
      if(data['cookies']['jwt']){
        this.rule=data['cookies']['user']['rule'];
        this.user_id=data['cookies']['user']['id'];
        this.username=data['cookies']['user']['username'];
       }

    })

  }

  getInfo():void {

     let message=`Flights list:
                 # As Admin rule you can insert, update and delete
                   your data. and watch other flights company.

                 # As Customer rule you can buy tickets.

                 # Please contact to : info@flightcrm.com for any Questions.

                 flightCRM team
                 972-054-3678907.
                 `;

    Swal.fire(message);



  }

  onISub:Subscription=null;
  onCsub:Subscription=null;
  buyTicket(flight_id,customer_id) {

     this.onISub=this.ticketApi.insertTicket(flight_id,customer_id).subscribe((data)=>{
       console.log('data',data);


     })

  }

}
