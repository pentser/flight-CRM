import { Component, OnInit } from '@angular/core';
import {CountryApi} from '../../services/country-api';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  

  constructor(public countryApi:CountryApi) { }

  country=null;
  ngOnInit(): void {
  }

}
