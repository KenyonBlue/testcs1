import { Component, OnInit } from '@angular/core';
import { Passenger } from './models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashbord.service';

@Component({
    selector: 'passenger-dashboard',
    templateUrl: './passenger-dashboard.component.html',
    styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];
    constructor(private passengerService: PassengerDashboardService) {}
    ngOnInit() { 
        this.passengerService
        .getPassengers()
    } 
    handleRemove(event: Passenger){
      this.passengers = this.passengers.filter((passenger: Passenger) => 
      passenger.id !== event.id)
    }
    handleEdit(event: Passenger) { 
      this.passengers = this.passengers.map((passenger: Passenger) => {
        if(passenger.id === event.id) {
          passenger = Object.assign({}, passenger, event)
        }
        return passenger;
      });      
    }


}
