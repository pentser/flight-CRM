import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FlightApi } from 'src/app/services/flight-api';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  flights:any=[];
  rule="";
  onSub:Subscription=null;

  constructor(private router:Router,public flightApi:FlightApi) {
  this.flights=this.router.getCurrentNavigation().extras.state.flights;

  }

  ngOnInit(): void {
     this.onSub=this.flightApi.readCookie().subscribe((data)=>{

      console.log(data)
      if(data['cookies']['jwt']){
        this.rule=data['cookies']['user']['rule'];
       }
       this.flights=history.state.flights;

    })

  }

}
