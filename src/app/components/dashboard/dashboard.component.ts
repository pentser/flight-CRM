import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import {LoginApi} from '../../services/login-api'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,OnDestroy {

   user:any;
  onSub:Subscription=null;
  isLogin=false;
  constructor(private loginApi:LoginApi) {

     this.onSub=this.loginApi.readCookie().subscribe((data)=>{

      console.log(data)
      if(data['cookies']['jwt']){
        this.user=data['cookies']['user'];
        this.isLogin=true;
       }
    })

   }


  ngOnDestroy(): void {
    this.onSub=null;
  }

  ngOnInit(): void {

  }

}
