import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {CountryApi} from '../../services/country-api';

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

}
