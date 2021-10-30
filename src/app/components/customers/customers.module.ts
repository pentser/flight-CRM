import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { InsertComponent } from './insert/insert.component';


@NgModule({
  declarations: [
    UpdateComponent,
    DeleteComponent,
    InsertComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
