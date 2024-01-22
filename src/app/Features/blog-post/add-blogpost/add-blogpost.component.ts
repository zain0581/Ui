import { Component, OnInit } from '@angular/core';
import { AddBlogpost } from '../models/add-blogpost';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { BlogPostServiceService } from '../Services/blog-post-service.service';
import { Router } from '@angular/router';
import { CategoryService } from '../../Category/Services/category.service';
import { Category } from '../../Category/models/category.model';
import { Toast, ToastrService } from 'ngx-toastr';
import { ImageService } from 'src/app/shared/Components/image-selector/image.service';
import { BlogImage } from 'src/app/shared/Models/blogImage-Model';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css']
})
export class AddBlogpostComponent implements OnInit {
  private addBlogsub?: Subscription;
  model: AddBlogpost;
  categories$?: Observable<Category[]>;
  IsImageSelecterVisible: boolean = false;  
  uploadImage?: Subscription;


  

  
  constructor(private blogpostservice: BlogPostServiceService, private router: Router, private categoryservice: CategoryService, private toaster:ToastrService, private imageservice: ImageService) {
    this.model = {
      Title: '',
      ShortDescription: '',
      Content: '',
      FeatureImageUrl: '',
      UrlHandle: '',
      PublishedDate: new Date(),
      IsVisible: true, 
      Author:'',
      Categories: []
    }
  }

  ngOnInit(): void {
  this.categories$ = this.categoryservice.getallcategories();
  this.uploadImage = this.imageservice.onSelectImage().subscribe({
    next: (response)=>{
      this.model.FeatureImageUrl = response.url;
      this.IsImageSelecterVisible = false;
    }
  })

  }

  
  

  // this method is called when the form is submitted
  // it calls the createblogpost method of the categoryservice  and passes the model as a parameter
  onFormSubmit(): void {
    console.log(this.model)
  this.addBlogsub= this.blogpostservice.createblogpost(this.model).subscribe({
      next: (Response) => {
        
        this.toaster.success("Blog post added successfully");
        this.router.navigateByUrl('/admin/blogpost');
      }
    })
  }


  openImageSelector(): void{
    this.IsImageSelecterVisible= true;

  }

  closeImageSelector(){
    this.IsImageSelecterVisible= false;
  }


// this method is called when the component is destroyed
  ngOnDestroy(): void {
    this.addBlogsub?.unsubscribe();
    this.uploadImage?.unsubscribe();
  } 
}

