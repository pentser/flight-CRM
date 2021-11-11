import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private loginApi:LoginApi,private router:Router) {
}

onLogout:Subscription=null;

logout() {
    this.onLogout=this.loginApi.logout().subscribe((data)=>{
     console.log(data);
     this.isLogin=false;
     window.location.reload();



 })
}

login() {

  this.router.navigate(['/']);

}

titleTyped(e) {
  console.log(e.target.value);
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

