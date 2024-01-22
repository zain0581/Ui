import { Component, OnInit } from '@angular/core';
import { BlogPostServiceService } from '../../blog-post/Services/blog-post-service.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../../blog-post/models/BlogPost-models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  blogs$?: Observable<BlogPost[]>; 
   
  constructor( private blobpostservice : BlogPostServiceService) {
  
  }

  ngOnInit(): void {
  this.blogs$ = this.blobpostservice.getallblogpost();
  }

}
