import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SignupApi{

  constructor(private httpClient:HttpClient ) { }
  public signup(params) {
    return this.httpClient.post('http://localhost:3000/signup',params);
  }
}
