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
    this.flights=httpClient.get<FlightInterface[]>(this.url)
  }



  }



