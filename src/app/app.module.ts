import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'


import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

import * as _ from 'lodash';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestCoStarComponent } from './test-co-star/test-co-star.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCoStarComponent
  ],
  imports: [
 PassengerDashboardModule,
  BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
