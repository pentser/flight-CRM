import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {LoginApi} from '../../services/login-api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private loginApi:LoginApi,private router:Router) { }

  onSub:Subscription=null;
  onSubmit(form) {


    if(form.status=="VALID")
    {
      console.log("form:",form.value);
      this.onSub=this.loginApi.getLogin(form.value).subscribe((data)=>{
        console.log(data);
        if(data)
        {
        /* for (const key in data)
             alert(data[key]); */
             console.log(data);
            this.router.navigate(['/flights'])
        }

      })

    }

    else{
      console.log('invalid data:',form);
    }

  }


  ngOnInit(): void {
  }

}
