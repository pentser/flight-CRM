import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    LogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
