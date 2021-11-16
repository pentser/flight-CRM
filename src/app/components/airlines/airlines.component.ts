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
