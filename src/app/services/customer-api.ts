import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Customer{
  id:string;
  first_name:string;
  last_name:string;
  address:string;
  phone_no:string;
  user_id:string;
  credit_card_no:string;

}

@Injectable({
  providedIn: 'root'
})

export class CustomerApi {

  customers:Observable<Customer[]>=null;
  readonly url='https://localhost:3000/admin/api/get_all_customers';

  constructor(private httpClient:HttpClient) {
    this.customers=httpClient.get<Customer[]>(this.url)
  }


}
