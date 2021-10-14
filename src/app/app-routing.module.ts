
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import {CustomersComponent} from "./components/customers/customers.component"
import {FlightsComponent} from "./components/flights/flights.component";
import {CountriesComponent} from "./components/countries/countries.component";
import {TicketsComponent} from "./components/tickets/tickets.component";
import { MessagesComponent } from "./components/messages/messages.component";
import { TutHttpComponent } from './components/tut-http/tut-http.component';
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import { AirlinesComponent } from './components/airlines/airlines.component';
import {UserGuard} from './guards/user.guard'


const appRouter: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'customers', component:CustomersComponent  },
  { path: 'flights', component:FlightsComponent,canActivate:[UserGuard]},
  { path: 'countries',component:CountriesComponent},
  { path: 'tickets', component:TicketsComponent},
  { path: 'airlines', component:AirlinesComponent},
  { path: 'messages', component:MessagesComponent},
  { path: 'posts',component:TutHttpComponent},
  { path: '**', component: PageNotFoundComponent }




];

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouter)
  ]
})
export class AppRoutingModule { }

