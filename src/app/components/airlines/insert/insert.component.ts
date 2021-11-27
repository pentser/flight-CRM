import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AirlineApi } from 'src/app/services/airline-api';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  id=null;
 airlinename='Enter Airline';
 countryid='Enter Country Id';
 userid='Enter User Id';
 isInsert=false;

 constructor(private airlineApi:AirlineApi,private route:ActivatedRoute,private router:Router) {



 }

  ngOnInit(): void {

  }

onSub:Subscription=null
onSubmit(form) {


  if(form.status=="VALID")
  {
    console.log("form:",form.value);

    this.onSub=this.airlineApi.insertairline(form.value.airlinename,form.value.countryid,form.value.userid).subscribe((data)=>{
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
  this.router.navigate(['airlines'])
}

ngOnDestroy(): void {
  this.onSub=null;
}

}
