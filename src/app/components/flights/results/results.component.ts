import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  flights:any=[];

  constructor(private router:Router) {
    this.flights=this.router.getCurrentNavigation().extras;
  }

  ngOnInit(): void {
  }

}
