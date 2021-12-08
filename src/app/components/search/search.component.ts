import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {SearchApi} from '../../services/search-api';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit ,OnDestroy{

  constructor(private searchApi:SearchApi,private router:Router) { }



  flights:any
  onSub:Subscription=null;
  onSubP:Subscription=null;

  onSubmit(form) {

    console.log(form.value)

     event.preventDefault();
    if(form.status=="VALID")
    {

      this.onSub=this.searchApi.getDepartureFlights(form.value.from).subscribe((data)=>{
         this.flights=data;
         this.router.navigate(['/flights/results'],{state:{flights:this.flights}});

          },(error=>{
        console.log(error)

      }), ()=>{
           console.log('complated')
      })

      this.onSubP=this.searchApi.getFlightsByParameters(form.value.from,form.value.to,form.value.departuretime).subscribe((data)=>{
        this.flights=data;
        this.router.navigate(['/flights/results'],{state:{flights:this.flights}});

         },(error=>{
       console.log(error)

     }), ()=>{
          console.log('complated')
     })


    }

    else{
      console.log('invalid data:',form);
    }

  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.onSub=null;
    this.onSubP=null;
  }


}
