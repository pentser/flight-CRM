import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {Car, HttpService} from '../../services/car-service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class TutHttpComponent implements OnInit,OnDestroy {


  cars:Car[]=[];
  p: number = 1;
  constructor(public httpService:HttpService) { }


  carSub:Subscription=null;
  ngOnInit(): void {
   this.carSub=this.httpService.getCars().subscribe(cars=>{
     this.cars=cars;
   })
  }

  addToFlight() {
    //TBD add car to flight details
  }

  ngOnDestroy(): void {
    this.carSub=null;
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
