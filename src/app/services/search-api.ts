import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FlightInterface} from '../interfaces/flight.interface'



@Injectable({
  providedIn: 'root'
})

export class SearchApi{

  flights:Observable<FlightInterface[]>=null;
  readonly url='https://localhost:3000/anonymous/api/get_all_flights';


  constructor(private httpClient:HttpClient ) {
   // this.flights=httpClient.get<FlightInterface[]>(this.url)
  }

  public getDepartureFlights(country_id) {
    return this.httpClient.get(`https://localhost:3000/anonymous/api/get_departure_flights?id=${country_id}`,{withCredentials: true});
  }

  public getFlightsByParameters(origin_country_id,destination_country_id,departore_time) {
    return this.httpClient.get(`https://localhost:3000/anonymous/api/get_flights_by_parameters?from=${origin_country_id}&to=${destination_country_id}&departuretime=${departore_time}`,{withCredentials: true});
  }





  }



