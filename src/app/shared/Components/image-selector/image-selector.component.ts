import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ImageService } from './image.service';
import { Observable } from 'rxjs';
import { BlogImage } from '../../Models/blogImage-Model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.css']
})
export class ImageSelectorComponent implements OnInit {
 
  private file?: File;  // Private variable to store the selected file
  filename: string = ''; // Filename entered by the user
  title: string = '';    // Title entered by the user
  images$?: Observable<BlogImage[]>;  // Observable to store the list of blog images

  // Reference to the form in the template
  @ViewChild('form', { static: false }) imageuploadform?: NgForm;

  constructor(private ImageService: ImageService) { }

  ngOnInit(): void {
    this.getimages(); // Call the method to fetch images on component initialization
  }

  // Event handler for file input change
  onfileuploadchange(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.file = element.files?.[0]; // Get the selected file
  }

  // Method to upload an image
  uploadimage(): void {
    if (this.file && this.filename !== '' && this.title !== '') {
      // Call the image service to upload the image
      this.ImageService.uploadimage(this.file, this.filename, this.title).subscribe({
        next: (Response) => {
          this.imageuploadform?.resetForm(); // Reset the form after successful upload
          this.getimages(); // Fetch updated list of images
        }
      });
    }
  }

  selectimage(image:BlogImage): void{
    this.ImageService.selectImage(image)
 
  }

  // Private method to fetch all images
  private getimages() {
    this.images$ = this.ImageService.getallimages(); // Assign the observable returned by the service
  }
}
