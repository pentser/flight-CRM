import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {FlightApi} from '../../services/flight-api';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  flights=null;
  rule="";
  onSub:Subscription=null;
  constructor(public flightApi:FlightApi) {

   }

  ngOnInit(): void {

    this.onSub=this.flightApi.readCookie().subscribe((data)=>{

      console.log(data)
      if(data['cookies']['jwt']){
        this.rule=data['cookies']['user']['rule'];
       }

    })
  }

}
