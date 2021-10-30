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


}
