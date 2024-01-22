import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddBlogpost } from '../models/add-blogpost';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/BlogPost-models';
import { environment } from 'src/environments/environment';
import { updateblogpost } from '../models/updateblogpost';

@Injectable({
  providedIn: 'root'
})
export class BlogPostServiceService {

  constructor(private http : HttpClient ) { 

  }

  createblogpost(data : AddBlogpost) : Observable<BlogPost>{
    return this.http.post<BlogPost>(`${environment.apiBaseUrl}BlogPost`,data);
  }

  getallblogpost():Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>(`${environment.apiBaseUrl}BlogPost`);
}

getCategoryById(id:string): Observable <BlogPost>{
  return this.http.get<BlogPost>(`${environment.apiBaseUrl}BlogPost/${id}`);
}

updateBlogpost(id:string,updatblogposttreq:updateblogpost): Observable <BlogPost>{
  return this.http.put<BlogPost>(`${environment.apiBaseUrl}BlogPost/${id}`,updatblogposttreq);
}  


deleteBlogpost(id:string): Observable <BlogPost>{
  return this.http.delete<BlogPost>(`${environment.apiBaseUrl}BlogPost/${id}`); 
}

getblogpostByUrl(urlHandle:string): Observable <BlogPost>{
  return this.http.get<BlogPost>(`${environment.apiBaseUrl}BlogPost/${urlHandle}`);
}


  
  }
