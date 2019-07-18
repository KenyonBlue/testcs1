import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';


// containers 
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component'
// components 
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
// services
import { PassengerDashboardService } from './passenger-dashbord.service';


@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerDetailComponent,
    PassengerCountComponent
  ],
  imports: [
CommonModule,
// HttpClientModule
    
  ],  exports: [
      PassengerDashboardComponent,
  ], 
    // components may rely on this provider via dependency injection
      providers: [
        PassengerDashboardService
  ]
})
export class PassengerDashboardModule {}
