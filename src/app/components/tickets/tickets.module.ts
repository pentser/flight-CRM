import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';




import { TicketsRoutingModule } from './tickets-routing.module';
import { UpdateComponent } from './update/update.component';
import { InsertComponent } from './insert/insert.component';
import { DeleteComponent } from './delete/delete.component';



@NgModule({
  declarations: [
    UpdateComponent,
    InsertComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    FormsModule,
   



  ]
})
export class TicketsModule { }
