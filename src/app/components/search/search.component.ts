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

  flights;
  onSub:Subscription=null;
  onSubmit(form) {

    console.log(form.value)

     event.preventDefault();
    if(form.status=="VALID")
    {

      this.onSub=this.searchApi.getDepartureFlights(form.value.from).subscribe((data)=>{
         this.flights=data;
         console.log('data',data)
      },(error=>{
        console.log(error)

      }), ()=>{
           console.log('complated')
      })

        if(this.searchApi)
        {

           //  this.router.navigate(['/flights'])

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
