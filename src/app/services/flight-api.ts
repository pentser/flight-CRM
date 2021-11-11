import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FlightInterface} from '../interfaces/flight.interface'



@Injectable({
  providedIn: 'root'
})

export class FlightApi {

  flights:Observable<FlightInterface[]>=null;
  readonly url='https://localhost:3000/anonymous/api/get_all_flights_join';

  constructor(private httpClient:HttpClient) {
    this.flights=httpClient.get<FlightInterface[]>(this.url)
  }

  public readCookie() {
    return this.httpClient.get('https://localhost:3000/read-cookies',{withCredentials: true});
  }



}
