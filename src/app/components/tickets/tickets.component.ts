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

}
