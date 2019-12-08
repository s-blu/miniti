import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TicketListComponent} from './ticket-list/ticket-list.component';
import {TicketEntryComponent} from './ticket-entry/ticket-entry.component';


@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketEntryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
