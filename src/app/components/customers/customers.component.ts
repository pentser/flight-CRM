import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {CustomerApi} from '../../services/customer-api';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customer=null;
  rule="";
  onSub:Subscription=null;
  constructor(public customerApi:CustomerApi) { }

  ngOnInit(): void {

    this.onSub=this.customerApi.readCookie().subscribe((data)=>{

      console.log(data)
      if(data['cookies']['jwt']){
        this.rule=data['cookies']['user']['rule'];
       }

    })
  }

}
