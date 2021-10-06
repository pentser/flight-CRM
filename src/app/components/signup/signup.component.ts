import {LoginApi} from '../../services/login-api';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit,OnDestroy {

  constructor( private router: Router,private loginApi:LoginApi) {}


  ngOnInit(): void {}

  onSub:Subscription=null;
  onSubmit(form) {

    //await loginWithEmail(this.form.email, this.form.password);
    if(form.status=="VALID")
    {
      console.log("form:",form.value);
      this.onSub=this.loginApi.getLogin(form.value).subscribe((data)=>{
        console.log(data)
      })

      //this.router.navigate(['/customers']);
    }

  }

  // free memory
  ngOnDestroy(): void {
    this.onSub=null;

  }


}

