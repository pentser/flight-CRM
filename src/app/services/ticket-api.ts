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
  readonly url='https://localhost:3000/admin/api/get_all_tickets';

  constructor(private httpClient:HttpClient) {
    this.tickets=httpClient.get<Ticket[]>(this.url)
  }

  public readCookie() {
    return this.httpClient.get('https://localhost:3000/read-cookies',{withCredentials: true});
  }

}
