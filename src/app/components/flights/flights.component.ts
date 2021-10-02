import { Component, OnInit } from '@angular/core';
import {FlightApi} from '../../services/flight-api';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  post=null;
  constructor(public flightApi:FlightApi) { }

  ngOnInit(): void {
  }

}
