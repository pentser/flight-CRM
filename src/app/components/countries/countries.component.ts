import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {CountryApi} from '../../services/country-api';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {


  constructor(public countryApi:CountryApi) { }

  country=null;
  onSub:Subscription=null;
  rule='';
  ngOnInit(): void {

    this.onSub=this.countryApi.readCookie().subscribe((data)=>{

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
