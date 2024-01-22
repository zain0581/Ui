import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addcategoryRequest } from '../models/add-category-request.model';
import { Category } from '../models/category.model';
import { environment } from 'src/environments/environment';
import { updatecategoryRequest } from '../models/update-category-request.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  addCategory( model:addcategoryRequest): Observable <void>{
    return this.http.post<void>(`${environment.apiBaseUrl}Categories`,model);
  }
  getallcategories(): Observable <Category[]>{
    return this.http.get<Category[]>(`${environment.apiBaseUrl}Categories`);
  }

  getCategoryById(id:string): Observable <Category>{
    return this.http.get<Category>(`${environment.apiBaseUrl}Categories/${id}`);
  }

  updateCategory(id:string,updatecategoryRequest:updatecategoryRequest): Observable <Category>{
    return this.http.put<Category>(`${environment.apiBaseUrl}Categories/${id}`,updatecategoryRequest);
  }  

  deleteCategory(id:string): Observable <Category>{
    return this.http.delete<Category>(`${environment.apiBaseUrl}Categories/${id}`);
  }   


 
}
