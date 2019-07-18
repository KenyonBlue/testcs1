import { Injectable } from '@angular/core';
import { Passenger } from './containers/passenger-dashboard/models/passenger.interface';




@Injectable()
export class PassengerDashboardService {
    constructor() {}

    getPassengers() {
  [{
    id: 1,
    fullname: "StephenA",
    checkedIn: true,
    checkInDate: 1490742000000,
    children: null
  }, {
    id: 2,
    fullname: "Rose",
    checkedIn: false,
    checkInDate: null,
    children: [{name: "ted", age: 5},{name: "suzi", age: 1}]
  }, {
    id: 3,
    fullname: "James",
    checkedIn: true,
    checkInDate: 1491606000000,
    children: null
  }, {
    id: 4,
    fullname: "Louise",
    checkedIn: true,
    checkInDate: 1490742000000,
    children: null
  }, {
    id: 5,
    fullname: "Tina",
    checkedIn: false,
    checkInDate: null,
    children: [{name: "ryan", age: 5},{name: "john", age: 1}]
  }];

        // return this.http
        //     .get(PASSENGER_API)
        //     .pipe(map((response: HttpResponse<any>) =>  response.body.json()))
    }
}