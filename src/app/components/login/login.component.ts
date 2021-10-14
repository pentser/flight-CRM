import {LoginApi} from '../../services/login-api';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit,OnDestroy {



  constructor( private router: Router,private loginApi:LoginApi) {}


  ngOnInit(): void {}

  onSub:Subscription=null;
  onSubmit(form) {


    if(form.status=="VALID")
    {
      console.log("form:",form.value);
      this.onSub=this.loginApi.getLogin(form.value).subscribe((data)=>{
        console.log(data);
   
      })

      //this.router.navigate(['/customers']);
    }

    else{
      console.log(form);
    }

  }

  // free memory
  ngOnDestroy(): void {
    this.onSub=null;

  }


}
