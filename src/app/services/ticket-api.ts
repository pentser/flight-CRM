import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Ticket{
  id:string;
  flight_id:string;
  customer_id:string;

}

@Injectable({
  providedIn: 'root'
})

export class TicketApi {

  tickets:Observable<Ticket[]>=null;
  readonly url='http://localhosts:3000/admin/api/get_all_tickets';

  constructor(private httpClient:HttpClient) {
    this.tickets=httpClient.get<Ticket[]>(this.url)
  }
/*
   getById(id: number) {
    return this.httpClient.get<Flight>(this.url + '/' + id);
  } */

}
