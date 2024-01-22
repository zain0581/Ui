import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../Services/category.service';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import { updatecategoryRequest } from '../models/update-category-request.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit,OnDestroy{

  // add a property called id of type string and initialize it to null  
  id : string | null = null;
  paramsSubscription?: Subscription;
  editcategorysubscription?: Subscription;
  category?:Category;

  constructor(private route : ActivatedRoute, private categoryService:CategoryService, private router: Router, private toastr: ToastrService ) {
    
  }
//we need to get the id from the url
// this is done by subscribing to the paramMap observable of the ActivatedRoute
  ngOnInit(): void {
   this.paramsSubscription = this.route.paramMap.subscribe({
    next: params => {
      this.id= params.get('id');

      if(this.id){
        this.categoryService.getCategoryById(this.id).subscribe({
          next: (response)=> {
            this.category=response;
          }
        });
      } 
    }
   });
  }
// compare this snippet from src/app/Features/Category/edit-category/edit-category.component.html:
  onformSubmit():void{
//object of type updatecategoryRequest  to be sent to the server 
  const updatecategoryRequest:updatecategoryRequest={
    Name: this.category?.name || '',
    UrlHandle: this.category?.urlHandle || ''
  };
  // call the updateCategory method of the categoryService
    this.editcategorysubscription = this.categoryService.updateCategory(this.id || '',updatecategoryRequest).subscribe({
    next: (response)=>{
      this.toastr.success('Category Updated Successfully');
     this.router.navigate(['/admin/category']);
    }
  });

  }
  onDelete():void{
    this.categoryService.deleteCategory(this.id || '').subscribe({
      next: (response)=>{
        this.toastr.success('Category Deleted Successfully');
       this.router.navigate(['/admin/category']);
      }
    });

  }




  // unsubscribe from the paramsSubscription and editcategorysubscription when the component is destroyed
  // we do this to avoid memory leaks
  // when we navigate away from this component, the component is destroyed
  // when the component is destroyed, we need to unsubscribe from the paramsSubscription and editcategorysubscription 
  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.editcategorysubscription?.unsubscribe(); 
  }



}
