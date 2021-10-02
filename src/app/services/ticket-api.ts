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

  flights:Observable<Ticket[]>=null;
  readonly url='http://localhost:3000/admin/api/get_all_tickets';

  constructor(private httpClient:HttpClient) {
    this.flights=httpClient.get<Ticket[]>(this.url)
  }
/*
   getById(id: number) {
    return this.httpClient.get<Flight>(this.url + '/' + id);
  } */

}
