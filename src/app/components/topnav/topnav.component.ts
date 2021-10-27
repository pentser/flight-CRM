import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginApi } from 'src/app/services/login-api';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit,OnDestroy  {


  user:object={
    username:'',
    email:'',
    rule:'',
    token:''
   };
  isLogin:boolean=false;
  onSub:Subscription=null;

  constructor(private loginApi:LoginApi) {
}

onLogout:Subscription=null;

logout() {
    alert('eli')
    this.onLogout=this.loginApi.logout().subscribe((data)=>{
     console.log(data);
 })
}

  ngOnInit(): void {

    this.onSub=this.loginApi.readCookie().subscribe((data)=>{
       if(data['cookies']['jwt']){
       this.user=data['cookies']['user'];
       this.isLogin=true;

      }

  });

  }


  ngOnDestroy(): void {
    this.onSub=null;
    this.onLogout=null;
  }
}

