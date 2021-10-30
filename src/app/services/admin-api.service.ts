import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TicketInterface} from '../interfaces/ticket.interface';
import {CustomerInterface} from '../interfaces/customer.interface';
import { UserInterface } from '../interfaces/user-interface';
import {MessageInterface} from '../interfaces/message.interface';




@Injectable({
  providedIn: 'root'
})

export class AdminApi {

  customers:Observable<CustomerInterface[]>=null;
  users:Observable<UserInterface[]>=null;
  tickets:Observable<TicketInterface[]>=null;
  user:Observable<UserInterface>=null;
  admin:Observable<UserInterface>=null;


  readonly urls=['https://localhost:3000/admin/api/get_all_tickets',
                 'https://localhost:3000/admin/api/get_all_users',
                 'https://localhost:3000/admin/api/get_all_customer',
                 'https://localhost:3000/admin/api/get_user_by_id',
                 'https://localhost:3000/admin/api/get_admin_by_user',
                 'https://localhost:3000/admin/api/get_all_transactions',
                ];

  constructor(private httpClient:HttpClient) {
    this.tickets=this.getAllTickets();
    this.users=this.getAllUsers();
    this.customers=this.getAllCustomers();
   
  }

  public getAllTickets() {
    return this.httpClient.get<TicketInterface[]>(this.urls[0],{withCredentials: true});
  }


  public getAllUsers() {
    return this.httpClient.get<UserInterface[]>(this.urls[1],{withCredentials: true});
  }

  public getAllCustomers() {
    return this.httpClient.get<CustomerInterface[]>(this.urls[2],{withCredentials: true});
  }

  public getUserById(id: number) {
    return this.httpClient.get<UserInterface>(this.urls[3] + '/' + id,{withCredentials: true});
  }


  public getAdminByUser(user: string) {
    return this.httpClient.get<UserInterface>(this.urls[4] + '/' + user,{withCredentials: true});
  }

  public getAllTransactions() {

    return this.httpClient.get<MessageInterface[]>(this.urls[5] ,{withCredentials: true});

  }



  public readCookie() {
    return this.httpClient.get('https://localhost:3000/read-cookies',{withCredentials: true});
  }




}

