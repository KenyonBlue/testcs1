import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../../blog-post';
import { Words } from '../../words';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  
  @Input() 
  public message: object[];

  @Input() tryThis: Words[];

  @Input() post: BlogPost;

  constructor() { 
  }
  ngOnInit() {
  }

  

}

//child