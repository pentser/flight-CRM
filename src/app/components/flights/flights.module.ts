import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AgmCoreModule} from '@agm/core'
import { AgmDirectionModule} from 'agm-direction'






import { FlightsRoutingModule } from './flights-routing.module';
import { UpdateComponent } from './update/update.component';
import { InsertComponent } from './insert/insert.component';
import { DeleteComponent } from './delete/delete.component';
import { MapComponent } from './map/map.component';
//import { ResultsComponent } from './results/results.component';



@NgModule({
  declarations: [
    UpdateComponent,
    InsertComponent,
    DeleteComponent,
    MapComponent,
   // ResultsComponent
  ],
  imports: [

    FlightsRoutingModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyCCQ7lj8cW6BJow7jW9YriTBr4bpVAUIxQ",
      language:'he',
      libraries:['places','geometry']
    }),
    AgmDirectionModule




  ]
})
export class FlightsModule { }
