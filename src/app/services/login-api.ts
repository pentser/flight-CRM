import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class LoginApi{




  constructor(private httpClient:HttpClient ) { }
  public getLogin(params) {
    return this.httpClient.post('https://localhost:3000/login',params,{withCredentials: true});
  }

 /*  public readheader() {
    return this.httpClient.get('https://localhost:3000/read_header',this.httpOptions,{withCredentials: true});
  } */

  public readCookie() {
    return this.httpClient.get('https://localhost:3000/read-cookies',{withCredentials: true});
  }

  public logout() {
    return this.httpClient.get('https://localhost:3000/logout',{withCredentials: true});
  }
}
