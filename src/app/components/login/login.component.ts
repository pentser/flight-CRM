import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = {
    email: '',
    password: '',
  };

  constructor( private router: Router) {}

  ngOnInit(): void {}

  async onSubmit(form) {

    console.log(form)
    //await loginWithEmail(this.form.email, this.form.password);
    if(form.status=="VALID")
    {
      console.log('email',form.value.email);
      console.log('password',form.value.password);


      this.router.navigate(['/customers']);
    }

  }
}
