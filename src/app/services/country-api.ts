import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {CountryInterface} from '../interfaces/country.interface';
import { catchError } from 'rxjs/operators'



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

  public deleteCountry(id) {


    const options = {
      headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Access-Control-Allow-Credentials': 'true'

      }),
      body: {
         id
      },
   };

    return this.httpClient.delete(`https://localhost:3000/admin/api/delete_country`,options)
  }

  public insertCountry(name) {
    return this.httpClient.post(`https://localhost:3000/admin/api/insert_country`,{name},{withCredentials: true});
  }

}
