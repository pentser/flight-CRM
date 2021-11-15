import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Car{
  year: number;
  id: number;
  horsepower: number;
  make: string;
  model: string;
  price: number;
  img_url: string;
}

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  cars:Observable<Car[]>=null;
  readonly url='https://private-anon-890366a60b-carsapi1.apiary-mock.com/cars';

  constructor(private httpClient:HttpClient) {
   // this.cars=httpClient.get<Car[]>(this.url)
  }

  getCars() {
    return this.httpClient.get<Car[]>(this.url)
  }


}
