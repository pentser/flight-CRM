import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CountryApi } from 'src/app/services/country-api';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  id=null;
 country='Enter Country';
 isInsert=false;

 constructor(private countryApi:CountryApi,private route:ActivatedRoute,private router:Router) {
 /*  this.id=Number(this.route.snapshot.queryParams['id']);
  this.country=this.route.snapshot.queryParams['country']; */
}
  ngOnInit(): void {

  }

onSub:Subscription=null
onSubmit(form) {


  if(form.status=="VALID")
  {
    console.log("form:",form.value);

    this.onSub=this.countryApi.insertCountry(form.value.countryname).subscribe((data)=>{
      console.log('data',data)
      if(data) {

        console.log(data);
        this.isInsert=true

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

