import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/Component/navbar/navbar.component';
import { CategoryListComponent } from './Features/Category/category-list/category-list.component';
import { AddCategoryComponent } from './Features/Category/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from'@angular/common/http';
import { EditCategoryComponent } from './Features/Category/edit-category/edit-category.component';
import { BlogListComponent } from './Features/blog-post/blog-list/blog-list.component';
import { AddBlogpostComponent } from './Features/blog-post/add-blogpost/add-blogpost.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';
import { MarkdownComponent } from 'ngx-markdown';
import { EditBlogpostComponent } from './Features/blog-post/edit-blogpost/edit-blogpost.component';
import { ImageSelectorComponent } from './shared/Components/image-selector/image-selector.component';
import { HomeComponent } from './Features/Public/home/home.component';
import { BlogDetailComponent } from './Features/Public/blog-detail/blog-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryListComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    BlogListComponent,
    AddBlogpostComponent,
    EditBlogpostComponent,
    ImageSelectorComponent,
    HomeComponent,
    BlogDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    MarkdownModule.forRoot(),
    MarkdownComponent
    
 
 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
