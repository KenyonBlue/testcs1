import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { Passenger } from '../../containers/passenger-dashboard/models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    templateUrl: './passenger-detail.component.html',
    styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnChanges, OnInit {
   
    @Input()
    detail: Passenger;

    @Output() 
    edit: EventEmitter<any> = new EventEmitter;

    @Output()
    remove: EventEmitter<any> = new EventEmitter;


    

    editing: boolean = false;

    constructor() {}

        ngOnChanges(changes: any) {
            if(changes.detail) {
                this.detail = Object.assign({}, changes.detail.currentValue);
            }
            console.log('onChanges');
        }

        ngOnInit(): void {
            console.log('ngOnInit');
            //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
            //Add 'implements OnInit' to the class.
            
        }

        onNameChange(value: string) {
            this.detail.fullname = value
        }
     
        toggleEdit() {
            if(this.editing) {
                this.edit.emit(this.detail);
            }
            this.editing = !this.editing;            
        }

        onRemove() {
            this.remove.emit(this.detail);
        }

    
}
