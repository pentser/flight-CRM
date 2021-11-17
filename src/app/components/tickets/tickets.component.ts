import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {TicketApi} from '../../services/ticket-api';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  ticket=null;
  rule='';
  onSub:Subscription=null;
  constructor(public ticketApi:TicketApi) { }

  ngOnInit(): void {

    this.onSub=this.ticketApi.readCookie().subscribe((data)=>{

      console.log(data)
      if(data['cookies']['jwt']){
        this.rule=data['cookies']['user']['rule'];
       }

    })
  }

  getInfo():void {
 let message=`Tickets list:
                 # As customer rule you can insert, update and delete
                   your data. and watch other clients tickets.

                 # Please contact to : info@flightcrm.com for any Questions.

                 flightCRM team
                 972-054-3678907.
                 `;

    Swal.fire(message);



  }

}
