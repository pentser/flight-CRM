import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { InsertComponent } from './insert/insert.component';
import { TicketsComponent } from './tickets.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {  path:'', component:TicketsComponent},
  { path: 'update', component:UpdateComponent },
  { path: 'delete', component:DeleteComponent },
  { path: 'insert', component:InsertComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
