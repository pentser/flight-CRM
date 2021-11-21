import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FlightApi } from 'src/app/services/flight-api';
import {TicketApi} from 'src/app/services/ticket-api';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {


  flights:any=[];
  rule="";
   user_id="";
  username="";
  customer_id="";

  
  
  onSub:Subscription=null;

  constructor(private router:Router,public flightApi:FlightApi,private ticketApi:TicketApi) {
  this.flights=this.router.getCurrentNavigation().extras.state.flights;

  }

  ngOnInit(): void {
     this.onSub=this.flightApi.readCookie().subscribe((data)=>{

      console.log(data)
      if(data['cookies']['jwt']){
        this.rule=data['cookies']['user']['rule'];
         this.user_id=data['cookies']['user']['id'];
        this.username=data['cookies']['user']['username'];
       }
       this.flights=history.state.flights;

    })

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

  

}
