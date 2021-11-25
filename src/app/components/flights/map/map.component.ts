import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

   //props from father
   id='';
   airlinename='';
   origincountry='';
   destinationcountry='';
   departuretime='';
   landingtime='';
   remainingtickets='';



    // google map derection
    public origin: any;
    public destination: any;


      // initial center position for the map
  lat: number = 32.0753325;
  lng: number = 34.8264765;

  zoom:number=12;


    markers: marker[] = [
      {
        lat: 32.0753325,
        lng: 34.8264765,
        label: 'A',
        draggable: true,
        address:'Address 1'

      },
      {
        lat: 32.0762555,
        lng: 34.9188889,
        label: 'B',
        draggable: true,
        address:'Address 2'

      },

    ]


  constructor(private route:ActivatedRoute) {

  }

  ngOnInit(): void {

    this.getDirection();
    this.id=this.route.snapshot.queryParams['id'];
    this.origincountry=this.route.snapshot.queryParams['origincountry'];
    this.destinationcountry=this.route.snapshot.queryParams['destinationcountry'];
    this. departuretime=this.route.snapshot.queryParams['departuretime'];
    this.landingtime=this.route.snapshot.queryParams['landingtime'];
    this.remainingtickets=this.route.snapshot.queryParams['remainingtickets'];
  }


   mapClicked($event: google.maps.MouseEvent): void {
    this.markers.push({
      lat: $event.latLng.lat(),
      lng: $event.latLng.lng(),
      draggable: true
    });
  }
 
  getDirection() {
    // this.origin = { lat: 32.0753325, lng: 34.8264765 };
    // this.destination = { lat: 32.0762555, lng: 34.9188889 };

     // Location within a string
      this.origin = this.origincountry;
      this.destination=this.destinationcountry

}
}

interface marker {
	lat: number;
	lng: number;
	label?: string;
  address?:string;
	draggable: boolean;
}

