import { Component, Input, OnDestroy, OnInit } from '@angular/core';


import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryApi } from 'src/app/services/country-api';

@Component({
  selector: 'app-update',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit,OnDestroy {

 id=null;
 country='';
 isDeleted=false;


  constructor(private countryApi:CountryApi,private route:ActivatedRoute,private router:Router) {
    this.id=Number(this.route.snapshot.queryParams['id']);




  }


  ngOnInit(): void {




    };

    onSub:Subscription=null
    onSubmit(form) {


      if(form.status=="VALID")
      {
        console.log("form:",form.value);

        this.onSub=this.countryApi.deleteCountry(this.id).subscribe((data)=>{
          if(data) {

            console.log(data);
            this.isDeleted=true

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




