import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Message{
  _id:string;
  url:string;
  last_name:string;
  fnName:string;
  params:[];
  __v:number;
}


@Injectable({
  providedIn: 'root'
})

export class MessagesApi {

  messages:Observable<Message[]>=null;
  readonly url='https://localhost:3000/admin/api/get_all_trasactions';

  constructor(private httpClient:HttpClient) {
    this.messages=httpClient.get<Message[]>(this.url)
  }

  public readCookie() {
    return this.httpClient.get('https://localhost:3000/read-cookies',{withCredentials: true});
  }


}

