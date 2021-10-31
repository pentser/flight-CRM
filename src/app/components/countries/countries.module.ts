import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { CountriesRoutingModule } from './countries-routing.module';
import { InsertComponent } from './insert/insert.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    InsertComponent,
    DeleteComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    FormsModule
  ]
})
export class CountriesModule { }
