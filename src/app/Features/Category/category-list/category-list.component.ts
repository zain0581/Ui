import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../Services/category.service';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories$?:Observable<Category[]>;

  constructor(private categogr: CategoryService) { }

  ngOnInit(): void {
//subscric a method that returns an observable
   this.categories$ = this.categogr.getallcategories();
  }
}
