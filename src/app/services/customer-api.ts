import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerInterface} from '../interfaces/customer.interface'



@Injectable({
  providedIn: 'root'
})

export class CustomerApi {

  customers:Observable<CustomerInterface[]>=null;
  readonly url='https://localhost:3000/admin/api/get_all_customers';

  constructor(private httpClient:HttpClient) {
    this.customers=httpClient.get<CustomerInterface[]>(this.url)
  }

  public readCookie() {
    return this.httpClient.get('https://localhost:3000/read-cookies',{withCredentials: true});
  }

  public insertCustomer(first_name,last_name,address,phone_no,user_id,credit_card_no) {
    return this.httpClient.post(`https://localhost:3000/customers/api/insert_customer`,{first_name,last_name,address,phone_no,user_id,credit_card_no},{withCredentials: true});
  }

  public updateCustomer(id,first_name,last_name,address,phone_no,user_id,credit_card_no) {
    return this.httpClient.post(`https://localhost:3000/customers/api/insert_customer`,{id,first_name,last_name,address,phone_no,user_id,credit_card_no},{withCredentials: true});
  }

  public getCustomerByUser(user_name) {
    return this.httpClient.post('https://localhost:3000/customers/api/get_customer_by_user',
    {user_name},{withCredentials: true});
  }




}
