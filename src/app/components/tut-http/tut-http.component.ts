import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-tut-http',
  templateUrl: './tut-http.component.html',
  styleUrls: ['./tut-http.component.scss']
})
export class TutHttpComponent implements OnInit {

  post=null;
  constructor(public httpService:HttpService) { }

  ngOnInit(): void {
  }

}
