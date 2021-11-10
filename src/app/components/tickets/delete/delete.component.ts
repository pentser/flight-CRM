import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { TicketApi } from 'src/app/services/ticket-api';



@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit ,OnDestroy {

  id=null;
  ticket='';
  isDeleted=false;
  errors:any[]=[];

  constructor(private ticketApi:TicketApi,private route:ActivatedRoute,private router:Router) {
    this.id=Number(this.route.snapshot.queryParams['id']);

  }


  ngOnInit(): void {
  }

  onSub:Subscription=null;
  onSubmit(form) {


    if(form.status=="VALID")
    {

      this.onSub=this.ticketApi.deleteTicket(this.id).subscribe((data)=>{

        if(data) {

          this.isDeleted=true

        }
      },(e)=> {
        console.log("error",e.error);
        this.errors.push(e.error)
      })


    }

    else{
      console.log('invalid data:',form);
    }

  }

  back(){
    this.router.navigate(['tickets'])
  }


  ngOnDestroy(): void {
    this.onSub=null;
  }

}
