import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from '../customers/customers.component';
import { DeleteComponent} from '../customers/delete/delete.component'
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {  path:'', component:CustomersComponent},
  { path: 'update', component:UpdateComponent },
  { path: 'delete', component:DeleteComponent },
  { path: 'insert', component:InsertComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
