import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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

  public updateTicket(id,flight_id,customer_id) {
    return this.httpClient.put(`https://localhost:3000/admin/api/update_Ticket`,{id,flight_id,customer_id},{withCredentials: true});
  }

  public deleteTicket(id) {


    const options = {
      headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Access-Control-Allow-Credentials': 'true'

      }),
      body: {
         id
      },
   };

    return this.httpClient.delete(`https://localhost:3000/admin/api/delete_ticket`,options)
  }

  public insertTicket(flight_id,customer_id) {
    return this.httpClient.post(`https://localhost:3000/admin/api/insert_ticket`,{flight_id,customer_id},{withCredentials: true});
  }

}
