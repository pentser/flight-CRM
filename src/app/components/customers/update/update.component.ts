import { Component, Input, OnDestroy, OnInit } from '@angular/core';


import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerApi } from 'src/app/services/customer-api';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit,OnDestroy {

 id=null;
 firstname='';
 lastname='';
 address='';
 phoneno='';
 userid='';
 creditcardno='';

 isUpdate=false;


  constructor(private customerApi:CustomerApi,private route:ActivatedRoute,private router:Router) {
    this.id=Number(this.route.snapshot.queryParams['id']);
    this.firstname=this.route.snapshot.queryParams['firstname'];
    this.lastname=this.route.snapshot.queryParams['lastname'];
    this.address=this.route.snapshot.queryParams['address'];
    this.phoneno=this.route.snapshot.queryParams['phoneno'];
    this.userid=this.route.snapshot.queryParams['userid'];
    this.creditcardno=this.route.snapshot.queryParams['creditcardno'];



  }


  ngOnInit(): void {




    };

    onSub:Subscription=null
    onSubmit(form) {


      if(form.status=="VALID")
      {
        console.log("form:",form.value);

        this.onSub=this.customerApi.updateCustomer(this.id,form.value.firstname,form.value.lastname,form.value.address,form.value.phoneno,form.value.userid,form.value.creditcardno).subscribe((data)=>{
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




