import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AirlineInterface} from '../interfaces/airline.interface'



@Injectable({
  providedIn: 'root'
})

export class AirlineApi {

  airlines:Observable<AirlineInterface[]>=null;
  readonly url='https://localhost:3000/anonymous/api/get_all_airlines_join';

  constructor(private httpClient:HttpClient) {
    this.airlines=httpClient.get<AirlineInterface[]>(this.url)
  }

  public readCookie() {
    return this.httpClient.get('https://localhost:3000/read-cookies',{withCredentials: true});
  }



}
