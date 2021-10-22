import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {LoginApi} from '../../services/login-api';
import {FlightApi} from '../../services/flight-api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private flightApi:FlightApi,private router:Router) { }

  onSub:Subscription=null;
  onSubmit(form) {

     event.preventDefault();
    if(form.status=="VALID")
    {
      console.log("form:",form.value);
      //this.onSub=this.flightApi.subscribe((data)=>{
       // console.log(data);
        if(this.flightApi)
        {
        /* for (const key in data)
             alert(data[key]); */
             console.log(this.flightApi);
           // this.router.navigate(['../flights'])
        }
        else{
          console.log('hgtghg');
        }

    }

    else{
      console.log('invalid data:',form);
    }

  }


  ngOnInit(): void {
  }

}
