import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {MessagesApi} from '../../services/messages-api';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  log=null;
  rule='';
  constructor(public messagesApi:MessagesApi) { }




  onSub:Subscription=null;
  ngOnInit(): void {


    this.onSub=this.messagesApi.readCookie().subscribe((data)=>{

      if(data['cookies']['jwt']){
        this.rule=data['cookies']['rule'];
       }

    })
  }

}
