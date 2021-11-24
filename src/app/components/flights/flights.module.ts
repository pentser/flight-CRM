import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';





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
    CommonModule




  ]
})
export class FlightsModule { }
