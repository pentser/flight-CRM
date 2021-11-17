import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {AirlineApi} from '../../services/airline-api';

// styled alert
import Swal from 'sweetalert2';




@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.scss']
})
export class AirlinesComponent implements OnInit {


  constructor(public airlineApi:AirlineApi) { }
  airline=null;
  rule='';

  onSub:Subscription=null;
  ngOnInit(): void {

    this.onSub=this.airlineApi.readCookie().subscribe((data)=>{

      console.log(data)
      if(data['cookies']['jwt']){
        this.rule=data['cookies']['user']['rule'];
       }

    })

  }

  getInfo():void {

    let message=`Airlines list:
                 # As airline rule you can insert, update and delete
                   your data. and watch other airlines company.

                 # Please contact to : info@flightcrm.com for any Questions.

                 flightCRM team
                 972-054-3678907.
                 `;

    Swal.fire(message);



  }




}
