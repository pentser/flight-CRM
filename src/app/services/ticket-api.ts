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
  readonly url='https://localhost:3000/admin/api/get_all_tickets_join';

  constructor(private httpClient:HttpClient) {
    this.tickets=httpClient.get<Ticket[]>(this.url)
  }

  public readCookie() {
    return this.httpClient.get('https://localhost:3000/read-cookies',{withCredentials: true});
  }

  public updateTicket(id,flight_id,customer_id) {
    return this.httpClient.put(`https://localhost:3000/customers/api/update_Ticket`,{id,flight_id,customer_id},{withCredentials: true});
  }

  public insertTicket(flight_id,customer_id) {
    return this.httpClient.post(`https://localhost:3000/customers/api/insert_Ticket`,{flight_id,customer_id},{withCredentials: true});
  }

  public getCustomerId(username) {
    return this.httpClient.post(`https://localhost:3000/customers/api/get_customer_by_user`,{username},{withCredentials: true});
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



}
