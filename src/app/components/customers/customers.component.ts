import { Component, OnInit } from '@angular/core';
import {CustomerApi} from '../../services/customer-api';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customer=null;
  constructor(public customerApi:CustomerApi) { }

  ngOnInit(): void {
  }

}
