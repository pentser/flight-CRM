import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class LoginApi{

   token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJpYXQiOjE2MzQxOTU0NDQsImV4cCI6MTYzNDQ1NDY0NH0.WU566z3aGuvXNzZbGg50BHfeDRcER1yXgHWUtq45gII";

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJpYXQiOjE2MzQxNTQxOTAsImV4cCI6MTYzNDQxMzM5MH0.PrFMLXj3fv7djW8hFsG58CVL4BpPIOUSglR59iZRHFI'
    })

  }


  constructor(private httpClient:HttpClient ) { }
  public getLogin(params) {
    return this.httpClient.post('http://localhost:3000/login',params);
  }

  public readheader() {
    return this.httpClient.get('http://localhost:3000/read_header',this.httpOptions);
  }

  public readCookie() {
    return this.httpClient.get('http://localhost:3000/read-cookies');
  }
}
