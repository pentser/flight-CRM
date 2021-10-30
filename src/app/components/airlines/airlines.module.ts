import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirlinesRoutingModule } from './airlines-routing.module';
import { DeleteComponent } from './delete/delete.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    DeleteComponent,
    InsertComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    AirlinesRoutingModule
  ]
})
export class AirlinesModule { }
