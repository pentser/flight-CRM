import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Flight{
  id:string;
  airline_id:string;
  origin_country_id:number;
  destination_country_id:string;
  departure_time:Date;
  landing_time:Date;
  remaining_tickets:number;

}

@Injectable({
  providedIn: 'root'
})

export class SearchApi{

  flights:Observable<Flight[]>=null;
  readonly url='https://localhost:3000/anonymous/api/get_all_flights';


  constructor(private httpClient:HttpClient ) {
    this.flights=httpClient.get<Flight[]>(this.url)
  }



  }



