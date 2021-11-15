import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomersComponent } from './components/customers/customers.component';
import { FlightsComponent } from './components/flights/flights.component';
import { CountriesComponent } from './components/countries/countries.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { LogsComponent } from './components/logs/logs.component';
import { TutHttpComponent } from './components/cars/cars.component';
import { AirlinesComponent } from './components/airlines/airlines.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import {ResultsComponent} from './components/flights/results/results.component'



@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    SidenavComponent,
    DashboardComponent,
    CustomersComponent,
    FlightsComponent,
    CountriesComponent,
    MessagesComponent,
    PageNotFoundComponent,
    TicketsComponent,
    LogsComponent,
    TutHttpComponent,
    AirlinesComponent,
    LoginComponent,
    SignupComponent,
    SearchComponent,
    AboutComponent,
    ResultsComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
