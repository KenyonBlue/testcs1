import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [
    //passing in a new user and invoking the constructor while providing name / squaaad / and image url 
      new User('kenyon blue', ['CoStar'], 
    'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2019/03/04141012/lime-roasted-salmon-skillet-square-500x500.jpg'
    )
  , 
    new User('jason jones', ['Las'], 
    'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2019/03/04141012/lime-roasted-salmon-skillet-square-500x500.jpg'
    ), 
  ];

  constructor() {}

  ngOnInit() {
  }

}
