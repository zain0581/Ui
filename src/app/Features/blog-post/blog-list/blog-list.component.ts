import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogPost } from '../models/BlogPost-models';
import { Observable } from 'rxjs';
import { BlogPostServiceService } from '../Services/blog-post-service.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent  implements OnInit{
  // add a property called blogpost$ of type Observable<BlogPost[]> and initialize it to null
  blogposts$?:Observable<BlogPost[]>;

constructor( private blogpostservice: BlogPostServiceService) {
}

 // call the getallblogpost method of the blogpostservice and assign the result to the blogpost$ property 
  ngOnInit(): void {
    this.blogposts$ = this.blogpostservice.getallblogpost();
  }


}
