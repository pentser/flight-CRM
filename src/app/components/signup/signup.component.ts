import {SignupApi} from '../../services/signup-api';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit,OnDestroy {

  constructor( private router: Router,private signupApi:SignupApi) {}


  ngOnInit(): void {}

  onSub:Subscription=null;
  onSubmit(form) {

    if(form.status=="VALID")
    {
      console.log("form:",form.value);
      this.onSub=this.signupApi.signup(form.value).subscribe((data)=>{
        window.location.reload();
      })

      //this.router.navigate(['/customers']);
    }

  }

  // free memory
  ngOnDestroy(): void {
    this.onSub=null;

  }


}

