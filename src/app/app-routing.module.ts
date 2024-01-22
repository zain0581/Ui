import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './Features/Category/add-category/add-category.component';
import { CategoryListComponent } from './Features/Category/category-list/category-list.component';
import { EditCategoryComponent } from './Features/Category/edit-category/edit-category.component';
import { BlogListComponent } from './Features/blog-post/blog-list/blog-list.component';
import { AddBlogpostComponent } from './Features/blog-post/add-blogpost/add-blogpost.component';
import { EditBlogpostComponent } from './Features/blog-post/edit-blogpost/edit-blogpost.component';
import { HomeComponent } from './Features/Public/home/home.component';
import { BlogDetailComponent } from './Features/Public/blog-detail/blog-detail.component';

const routes: Routes = [

{
  path: 'admin/category', component: CategoryListComponent,
},
{
  path:'admin/category/add',component: AddCategoryComponent
},
{
  path:'admin/category/:id',component: EditCategoryComponent
} ,
{
  path:'admin/blogpost',component: BlogListComponent 
},
{
  path:'admin/blogposts/add',component: AddBlogpostComponent
},
{
  path:'admin/blogposts/:id',component: EditBlogpostComponent
},
{
  path: '',component:HomeComponent
},
{
  path: 'blog/:url',component:BlogDetailComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
