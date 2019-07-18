import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from '../../containers/passenger-dashboard/models/passenger.interface';

@Component({
    selector: 'passenger-count',
    styleUrls: ['./passenger-count.component.scss'],
    templateUrl: './passenger-count.component.html'
})
export class PassengerCountComponent implements OnInit {
    @Input()
    items: Passenger[];

    // checkedInCount(): number {
    //     if(!this.items) return; 
    //     console.log('items:', this.items);
    //     return this.items.filter((passenger: Passenger) => {
    //         return passenger.checkedIn;
    //     }).length
    // }
    
checkedIn() {
    if(!this.items) {
        this.items.length = 0
    } 
    return this.items.filter((passenger: Passenger) => passenger.checkedIn
    ).length
}

    ngOnInit(): void {}
}
