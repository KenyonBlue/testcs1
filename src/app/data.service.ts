//ng-service is the short cut
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class DataService {

        private messageSource = new BehaviorSubject<object[]>([{name: "kenyon"}]);
        currentMessage = this.messageSource.asObservable();

    constructor() {}    

    changeMessage(message: object[]) {
        this.messageSource.next(message);
    }
    
}
