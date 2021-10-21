import { Component, OnInit } from '@angular/core';
import {MessagesApi} from '../../services/messages-api';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  customer=null;
  constructor(public messagesApi:MessagesApi) { }




  ngOnInit(): void {
  }

}
