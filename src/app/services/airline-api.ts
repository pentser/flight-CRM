import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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

  public updateAirline(id,name) {
    return this.httpClient.put(`https://localhost:3000/admin/api/update_airline`,{id,name},{withCredentials: true});
  }

  public deleteAirline(id) {


    const options = {
      headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Access-Control-Allow-Credentials': 'true'

      }),
      body: {
         id
      },
   };

    return this.httpClient.delete(`https://localhost:3000/admin/api/delete_airline`,options)
  }

  public insertairline(name) {
    return this.httpClient.post(`https://localhost:3000/admin/api/insert_airline`,{name},{withCredentials: true});
  }



}
