import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { addcategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../Services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy{

  model:addcategoryRequest;
  private addcategorysubsubscribtion?: Subscription;

  constructor(private categoryservice : CategoryService,private router : Router) {

    this.model={
      Name:'',
      UrlHandle:''
    }
  }


  onFormSubmit(){
    // console.log(this.model);
  this.addcategorysubsubscribtion = this.categoryservice.addCategory(this.model)
    .subscribe({
      next:(Response)=>{
        this.router.navigateByUrl('/admin/category');
     
    }
    })

  }
  ngOnDestroy(): void {
    this.addcategorysubsubscribtion?.unsubscribe();
  }
}
