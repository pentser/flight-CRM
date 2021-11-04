import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { FlightsComponent } from './flights.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import {ResultsComponent} from './results/results.component'

const routes: Routes = [
  {  path:'', component:FlightsComponent},
  { path: 'update', component:UpdateComponent },
  { path: 'delete', component:DeleteComponent },
  { path: 'insert', component:InsertComponent },
  { path: 'results', component:ResultsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightsRoutingModule { }
