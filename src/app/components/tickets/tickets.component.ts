import { Component, OnInit } from '@angular/core';
import {TicketApi} from '../../services/ticket-api';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  ticket=null;
  constructor(public ticketApi:TicketApi) { }

  ngOnInit(): void {
  }

}
