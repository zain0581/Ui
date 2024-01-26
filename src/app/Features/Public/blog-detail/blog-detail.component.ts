import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPostServiceService } from '../../blog-post/Services/blog-post-service.service';
import { Observable, Subscription } from 'rxjs';
import { BlogPost } from '../../blog-post/models/BlogPost-models';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent  implements OnInit, OnDestroy{
  
  url: string | null= null
  blogpost$? : Observable<BlogPost>;
  blogpostsub$? : Subscription
  
    constructor(private route : ActivatedRoute, private blogpost :BlogPostServiceService ) {
     }
 
 
  

    ngOnInit(): void {
     this.blogpostsub$ = this.route.paramMap.subscribe({ 
        next:(parms) => {
        this.url=  parms.get('url')
  
        }
      });

      // fetch blog detail by url
      if (this.url !=null){
     this.blogpost$ = this.blogpost.getblogpostByUrl(this.url)
      } 
    }

    ngOnDestroy(): void {
      this.blogpostsub$?.unsubscribe();
    }
   

}
