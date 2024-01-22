import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogPostServiceService } from '../Services/blog-post-service.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { BlogPost } from '../models/BlogPost-models';
import { CategoryService } from '../../Category/Services/category.service';
import { Category } from '../../Category/models/category.model';
import { updateblogpost } from '../models/updateblogpost';
import { ToastrService } from 'ngx-toastr';
import { ImageService } from 'src/app/shared/Components/image-selector/image.service';

@Component({
  selector: 'app-edit-blogpost',
  templateUrl: './edit-blogpost.component.html',
  styleUrls: ['./edit-blogpost.component.css']
})
export class EditBlogpostComponent implements OnInit, OnDestroy{

  id : string | null = null ;
  model?: BlogPost
  categories$?: Observable<Category[]>
  selectedcategories? : string[]
  blog?:BlogPost;

  IsImageSelecterVisible: boolean = false;

  // these are Subscription prop that i am subscribeing to it 
  Paramsubscription?: Subscription;
  blogposdescrpition? : Subscription;
  getblogpostsubscription?: Subscription;
  deleteblogpostsubscrpition?: Subscription;
  imageselectsubscription?: Subscription;

  constructor( private blopostsevice: BlogPostServiceService, private Router : ActivatedRoute,
   private Categoryservice: CategoryService, private router: Router, private toaster: ToastrService,
   private ImageService : ImageService) { 
  }

  ngOnInit(): void {
   this.categories$ =  this.Categoryservice.getallcategories()
  this.Paramsubscription = this.Router.paramMap.subscribe({
      next: (params)=>{
        this.id = params.get('id');
        if(this.id){
         this.getblogpostsubscription = this.blopostsevice.getCategoryById(this.id).subscribe({
            next: (Response)=>{
            this.model= Response;
            this.selectedcategories = Response.categories.map(x=>x.id)
            }
          })
        }

      this.imageselectsubscription =  this.ImageService.onSelectImage().subscribe({
          next: (response)=>{
            if(this.model){
              this.model.featureImageUrl = response.url;
              this.IsImageSelecterVisible = false;
            }
          }
        })

      }

   })
  }

  onFormSubmit(){
  // covert the model to request object
  if(this.model && this.id){
    var updateblogpost: updateblogpost ={
      title: this.model.title,
      shortDescription: this.model.shortDescription,
      content: this.model.content,
      featureImageUrl: this.model.featureImageUrl,
      urlHandle: this.model.urlHandle,
      publishedDate: this.model.publishedDate,
      author:this.model.author,
      isVisible: this.model.isVisible,  
      categories:this.selectedcategories??[]
    }
   this.blogposdescrpition = this.blopostsevice.updateBlogpost(this.id,updateblogpost).subscribe({
      next: (Response)=>{
        this.toaster.success('BlogPost Updated Successfully');
        // alert(JSON.stringify(Response));
         this.router.navigate(['/admin/blogpost'])

      }
    })
  }
  }

  onDelete(){
    if(this.id){
    this.deleteblogpostsubscrpition =  this.blopostsevice.deleteBlogpost(this.id).subscribe({
        next: (response)=>{
          this.toaster.success('BlogPost Deleted Successfully');
          // alert(JSON.stringify(response));
          this.router.navigate(['/admin/blogpost'])
        }
      })
    }
  }

  openImageSelector(): void{
    this.IsImageSelecterVisible= true;

  }

  closeImageSelector():void{
    this.IsImageSelecterVisible= false;
  }

   // this method is for unsubcribe the services i am using 
   ngOnDestroy(): void {
    this.Paramsubscription?.unsubscribe();
    this.blogposdescrpition?.unsubscribe();
    this.getblogpostsubscription?.unsubscribe();
    this.blogposdescrpition?.unsubscribe();
    this.imageselectsubscription?.unsubscribe();
  }

}
