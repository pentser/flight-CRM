import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Country{
  id:number;
  name:string;
}

@Injectable({
  providedIn: 'root'
})

export class CountryApi {

  countries:Observable<Country[]>=null;
  readonly url='http://localhost:3000/anonymous/api/get_all_countries';

  constructor(private httpClient:HttpClient) {
    this.countries=httpClient.get<Country[]>(this.url)
  }
/*
   getById(id: number) {
    return this.httpClient.get<Flight>(this.url + '/' + id);
  } */

}
