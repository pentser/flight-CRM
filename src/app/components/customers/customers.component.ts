import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {CustomerApi} from '../../services/customer-api';
import Swal from 'sweetalert2'

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

  getInfo():void {

    let message=`## delete tables with this orders for cascade delete
    - tickets
    - flight
    - airlines
    - customers
    - users
    - countries

    ## insert data with the inverse order for cascade insert
    - countries
    - users
    - customers
    - airlines
    - flights
    - tickets`;

    Swal.fire(message);



  }

}
