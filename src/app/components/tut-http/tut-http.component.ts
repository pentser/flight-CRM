import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-tut-http',
  templateUrl: './tut-http.component.html',
  styleUrls: ['./tut-http.component.scss']
})
export class TutHttpComponent implements OnInit {


  constructor(public httpService:HttpService) { }

  ngOnInit(): void {
   this.httpService.cars.subscribe((data)=>{
      console.log(data);
    })
  }

}
/*
"year": 2016,
"id": 15,
"horsepower": 252,
"make": "audi",
"model": "a6",
"price": 52100,
"img_url": "http://ts2.mm.bing.net/th?id=OIP.M87f9a7ad73341027ed0eb94569f2425eH0&pid=15.1"*/
