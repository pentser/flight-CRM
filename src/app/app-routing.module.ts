
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from './components/signup/signup.component';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import {CustomersComponent} from "./components/customers/customers.component"
import {FlightsComponent} from "./components/flights/flights.component";
import {CountriesComponent} from "./components/countries/countries.component";
import {TicketsComponent} from "./components/tickets/tickets.component";
import { MessagesComponent } from "./components/messages/messages.component";
import {LogsComponent} from "./components/logs/logs.component"
import { TutHttpComponent } from './components/tut-http/tut-http.component';
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import { AirlinesComponent } from './components/airlines/airlines.component';
import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component'
import {UserGuard} from './guards/user.guard'




const appRouter: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'customers', loadChildren:()=>import('./components/customers/customers.module').then(m=>m.CustomersModule)},
  { path: 'flights', component:FlightsComponent},//,canActivate:[UserGuard]},
  { path: 'countries',component:CountriesComponent},
  { path: 'tickets', component:TicketsComponent},
  { path: 'airlines', component:AirlinesComponent},
  { path: 'messages', component:LogsComponent},
  { path: 'posts',component:TutHttpComponent},
  { path: 'about',component:AboutComponent},
  { path: 'search',component:SearchComponent},
  {path: 'signup',component:SignupComponent},
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

