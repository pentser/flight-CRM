import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TicketApi } from 'src/app/services/ticket-api';
import {FlightApi} from '../../services/flight-api';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit, OnDestroy {

  flights=null;
  rule="";
  user_id="";
  username="";
  customer_id="";


  onSub:Subscription=null;
  constructor(public flightApi:FlightApi,private ticketApi:TicketApi,private router:Router) {


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
  async buyTicket(flight_id) {

    this.onCsub=await this.ticketApi.getCustomerId(this.username).subscribe(async (data)=>{
      this.customer_id=data['id'];
      this.onISub=await this.ticketApi.insertTicket(flight_id,Number(this.customer_id)).subscribe((data)=>{

        if(data)
        {
          let message=`Dear ${this.username}
          you buy ticket id: ${data}.`
          Swal.fire(message);
          this.router.navigate(['tickets'])
        }




      })



   })



  }

  ngOnDestroy(): void {
   this.onCsub=null;
   this.onCsub=null;
  }

}
