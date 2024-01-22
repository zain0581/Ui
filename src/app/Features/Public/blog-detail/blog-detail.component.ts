import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPostServiceService } from '../../blog-post/Services/blog-post-service.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../../blog-post/models/BlogPost-models';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent  implements OnInit{
  
  url: string | null= null
  blogpost$? : Observable<BlogPost>;
  
    constructor(private route : ActivatedRoute, private blogpost :BlogPostServiceService ) {
     }
 
  

    ngOnInit(): void {
      this.route.paramMap.subscribe({ 
        next:(parms) => {
        this.url=  parms.get('url')
  
        }

      });

      // fetch blog detail by url
      if (this.url !=null){
     this.blogpost$ = this.blogpost.getblogpostByUrl(this.url)
      }

      

    }
   

}
