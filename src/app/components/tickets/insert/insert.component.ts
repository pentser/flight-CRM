import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TicketApi } from 'src/app/services/ticket-api';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss'],
})
export class InsertComponent implements OnInit {

  flightId=0;
  customerId=0;
 isInsert=false;

 constructor(private ticketApi:TicketApi,private route:ActivatedRoute,private router:Router) {
   this.flightId=Number(this.route.snapshot.queryParams['id']);

   console.log('data from constractor',this.flightId);


}
  ngOnInit(): void {
    this.ticketApi.readCookie().subscribe((data)=>{

      console.log('data from ngOninit',data);


    })

  }

onSub:Subscription=null
onSubmit(form) {


  if(form.status=="VALID")
  {
    console.log("form:",form.value);

    this.onSub=this.ticketApi.insertTicket(form.value.flight_id,form.value.customer_id).subscribe((data)=>{
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
  this.router.navigate(['flights'])
}

ngOnDestroy(): void {
  this.onSub=null;
}

}

