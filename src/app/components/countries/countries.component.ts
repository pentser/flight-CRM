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

     let message=`Countries list:
                 # As admin rule you can insert, update and delete
                   your data. and watch all the country on the list.

                 # Please contact to : info@flightcrm.com for any Questions.

                 flightCRM team
                 972-054-3678907.
                 `;
    Swal.fire(message);



  }

}
