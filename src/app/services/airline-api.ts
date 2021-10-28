import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Airline{
  id:string;
  name:string;
  country_id:number;
  user_id:string;
}

@Injectable({
  providedIn: 'root'
})

export class AirlineApi {

  airlines:Observable<Airline[]>=null;
  readonly url='https://localhost:3000/anonymous/api/get_all_airlines_join';

  constructor(private httpClient:HttpClient) {
    this.airlines=httpClient.get<Airline[]>(this.url)
  }

  public readCookie() {
    return this.httpClient.get('https://localhost:3000/read-cookies',{withCredentials: true});
  }



}
