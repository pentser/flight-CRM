import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {AirlineApi} from '../../services/airline-api';

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

}
