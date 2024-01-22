import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BlogImage } from '../../Models/blogImage-Model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {


  selectedImage:BehaviorSubject<BlogImage> =new BehaviorSubject<BlogImage>({
    id:'',
    title:'',
    fileName:'',
    FileExtension:'',
    url:''
  });
  
  constructor( private http: HttpClient) { }
  uploadimage(file: File, fileName: string, title: string): Observable<BlogImage>{
    const formdata = new FormData();
    formdata.append('file', file);
    formdata.append('filename', fileName);
    formdata.append('title', title);
    
   return this.http.post<BlogImage>(`${environment.apiBaseUrl}images`,formdata)

      
  }

  getallimages(): Observable<BlogImage[]>{
    return this.http.get<BlogImage[]>(`${environment.apiBaseUrl}Images`)
  } 

  selectImage(image:BlogImage):void{
  this.selectedImage.next(image)
  }
  onSelectImage():Observable<BlogImage>{
    return this.selectedImage.asObservable();
  }

}
