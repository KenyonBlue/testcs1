import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';
import { Words } from '../words';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients = [];


  public words: Words[] = [
    {
      name: "name 1..  ",
      lifeQuote: "win the moment"
    },
    {
      name: "name 2..  ",
      doglifeQuote: "win the moment dog"
    },
  ]

  public blogPosts: BlogPost[] = [];

  constructor() {
    console.log('message:', this.words)

    const video = {
      title: "a",
      tags: ["a", "b", "c"],
      showTags() {
        this.tags.forEach(tag => {
          console.log(this.title, tag);
        }, this);
      }
    };
    video.showTags();
  }


  ngOnInit() {
    this.blogPosts.push(new BlogPost("title of blog post", "this is the title "));
    this.blogPosts.push(new BlogPost("title of blog post2", "this is the title2 "));
    this.words.push(new Words("kenyon", "winning is living", "my dog is great"));
  }

}

//parent