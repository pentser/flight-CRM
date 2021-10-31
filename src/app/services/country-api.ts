import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CountryInterface} from '../interfaces/country.interface'



@Injectable({
  providedIn: 'root'
})

export class CountryApi {

  countries:Observable<CountryInterface[]>=null;
  readonly url='https://localhost:3000/anonymous/api/get_all_countries';

  constructor(private httpClient:HttpClient) {
    this.countries=httpClient.get<CountryInterface[]>(this.url)
  }

  public readCookie() {
    return this.httpClient.get('https://localhost:3000/read-cookies',{withCredentials: true});
  }

  public updateCountry(id,name) {
    return this.httpClient.put(`https://localhost:3000/admin/api/update_country`,{id,name},{withCredentials: true});
  }

}
