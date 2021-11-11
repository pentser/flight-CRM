
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from './components/signup/signup.component';
import { DashboardComponent } from "./components/dashboard/dashboard.component";

import {LogsComponent} from "./components/logs/logs.component"
import { TutHttpComponent } from './components/tut-http/tut-http.component';
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component'
import {UserGuard} from './guards/user.guard'




const appRouter: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'customers', loadChildren:()=>import('./components/customers/customers.module').then(m=>m.CustomersModule)},
  { path: 'flights', loadChildren:()=>import('./components/flights/flights.module').then(m=>m.FlightsModule)},//,canActivate:[UserGuard]},
  { path: 'countries',loadChildren:()=>import('./components/countries/countries.module').then(m=>m.CountriesModule)},
  { path: 'tickets', loadChildren:()=>import('./components/tickets/tickets.module').then(m=>m.TicketsModule)},
  { path: 'airlines', loadChildren:()=>import('./components/airlines/airlines.module').then(m=>m.AirlinesModule)},
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

