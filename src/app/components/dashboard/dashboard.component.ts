import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {LoginApi} from '../../services/login-api'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,OnDestroy {

  onSub:Subscription=null;
  res={};
  constructor(private loginApi:LoginApi) {

     this.onSub=this.loginApi.readCookie().subscribe((data)=>{
      console.log(data)
      this.res=data;
    })

   }


  ngOnDestroy(): void {
    this.onSub=null;
  }

  ngOnInit(): void {

  }

}
