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

     let message=`Customers list:
                 # As customer rule you can insert, update and delete
                   your data. and watch other customers data.

                 # Please contact to : info@flightcrm.com for any Questions.

                 flightCRM team
                 972-054-3678907.
                 `;

    Swal.fire(message);



  }

}
