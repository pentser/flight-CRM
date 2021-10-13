import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginApi{

  constructor(private httpClient:HttpClient ) { }
  public getLogin(params) {
    return this.httpClient.post('http://localhost:3000/login',params);
  }

  public readTokens() {
    return this.httpClient.get('http://localhost:3000/read_cookies');
  }
}
