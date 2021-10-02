import { Component, OnInit } from '@angular/core';
import {AirlineApi} from '../../services/airline-api';

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.scss']
})
export class AirlinesComponent implements OnInit {

  constructor(public airlineApi:AirlineApi) { }
  airline=null;
  ngOnInit(): void {
  }

}
