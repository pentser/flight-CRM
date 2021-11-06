import { Component, Input, OnDestroy, OnInit } from '@angular/core';


import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AirlineApi } from 'src/app/services/airline-api';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit,OnDestroy {

 id=null;
 airline='';
 countryid=''
 userid=''
 isUpdate=false;


  constructor(private airlineApi:AirlineApi,private route:ActivatedRoute,private router:Router) {
    this.id=Number(this.route.snapshot.queryParams['id']);
    this.airline=this.route.snapshot.queryParams['airline'];
    this.countryid=this.route.snapshot.queryParams['countruyid'];
    this.userid=this.route.snapshot.queryParams['userid'];



  }


  ngOnInit(): void {




    };

    onSub:Subscription=null
    onSubmit(form) {


      if(form.status=="VALID")
      {
        console.log("form:",form.value);

        this.onSub=this.airlineApi.updateAirline(this.id,form.value.airlinename).subscribe((data)=>{
          if(data) {

            console.log(data);
            this.isUpdate=true

          }
        })


      }

      else{
        console.log('invalid data:',form);
      }

    }
    back(){
      this.router.navigate(['airlines'])
    }

    ngOnDestroy(): void {
      this.onSub=null;
    }


  }




