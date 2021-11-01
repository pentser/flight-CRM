import { Component, Input, OnDestroy, OnInit } from '@angular/core';


import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryApi } from 'src/app/services/country-api';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit,OnDestroy {

 id=null;
 country='';
 isUpdate=false;


  constructor(private countryApi:CountryApi,private route:ActivatedRoute,private router:Router) {
    this.id=Number(this.route.snapshot.queryParams['id']);
    this.country=this.route.snapshot.queryParams['country'];



  }


  ngOnInit(): void {




    };

    onSub:Subscription=null
    onSubmit(form) {


      if(form.status=="VALID")
      {
        console.log("form:",form.value);

        this.onSub=this.countryApi.updateCountry(this.id,form.value.countryname).subscribe((data)=>{
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
      this.router.navigate(['countries'])
    }

    ngOnDestroy(): void {
      this.onSub=null;
    }


  }




