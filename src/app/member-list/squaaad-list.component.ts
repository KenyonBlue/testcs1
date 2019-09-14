import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';
import { Attribute } from '../shared/attributes.model';

@Component({
  selector: 'app-squaaad-list',
  templateUrl: './squaaad-list.component.html',
  styleUrls: ['./squaaad-list.component.scss']
})

export class SquaaadListComponent implements OnInit {
  attribute: Attribute[] = [
    new Attribute('fun', 'very'),
    new Attribute('savage', 'yes'),
  ];

  public blogPosts: BlogPost[] = [];

  constructor() {
  }


  ngOnInit() {
    
  }

}

//parent