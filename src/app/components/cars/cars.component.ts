import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {Car, HttpService} from '../../services/car-service';
// styled alert
import Swal from 'sweetalert2';

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

  async addToFlight(car) {

    Swal.fire({
      title: car.make,
      text: 'Model: ' + car.model,
      imageUrl: car.img_url,
      imageWidth: '100%',
      imageHeight: '100%',
      imageAlt: car.make,
    })
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
