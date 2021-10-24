import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {SearchApi} from '../../services/search-api';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private searchApi:SearchApi,private router:Router) { }

  onSub:Subscription=null;
  onSubmit(form) {

     event.preventDefault();
    if(form.status=="VALID")
    {

      //this.onSub=this.flightApi.subscribe((data)=>{
       // console.log(data);
        if(this.searchApi)
        {
        /* for (const key in data)
             alert(data[key]); */
             console.log(form.value);
           // this.router.navigate(['../flights'])
        }
        else{
          console.log('no flights');
        }

    }

    else{
      console.log('invalid data:',form);
    }

  }


  ngOnInit(): void {
  }

}
