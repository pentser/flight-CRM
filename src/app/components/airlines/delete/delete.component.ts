import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AirlineApi } from 'src/app/services/airline-api';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit,OnDestroy {

  id=null;
 airline='';
 isDeleted=false;
 errors:any[]=[];

 constructor(private airlineApi:AirlineApi,private route:ActivatedRoute,private router:Router) {
  this.id=Number(this.route.snapshot.queryParams['id']);

}

onSub:Subscription=null
onSubmit(form) {


  if(form.status=="VALID")
  {

    this.onSub=this.airlineApi.deleteAirline(this.id).subscribe((data)=>{

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
  this.router.navigate(['airlines'])
}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.onSub=null;
  }


}
