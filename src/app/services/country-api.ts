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
  readonly url='https://localhost:3000/anonymous/api/get_all_countries';

  constructor(private httpClient:HttpClient) {
    this.countries=httpClient.get<Country[]>(this.url)
  }

  public readCookie() {
    return this.httpClient.get('https://localhost:3000/read-cookies',{withCredentials: true});
  }

}
