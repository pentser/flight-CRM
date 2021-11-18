import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomerApi } from 'src/app/services/customer-api';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  id=null;
 firstName='Enter First Name';
 lastName='Enter Last Name';
 address='Address';
 phoneNumber='Phone Number';
 countryid='Enter Country Id';
 userid='Enter User Id'
 craditCardNo='xxxx-xxxx-xxxx-xxxx';
 isInsert=false;

 constructor(private customerApi:CustomerApi,private route:ActivatedRoute,private router:Router) {
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

    this.onSub=this.customerApi.insertCustomer(form.value.firstname,form.value.lastname,form.value.address,form.value.phone,form.value.userid,form.value.creditcardno).subscribe((data)=>{
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

