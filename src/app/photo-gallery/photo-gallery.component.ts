import { Component, OnInit } from '@angular/core';
import { LoremPicsumApiService } from '../lorem-picsum-api.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {
  private photos: object = [];

  constructor(private loremPicsumApiService: LoremPicsumApiService) { }

  ngOnInit() {
    this.getPhotos();
  }

  public getPhotos() {
    this.loremPicsumApiService.getPhotos().subscribe((response) => {
      this.photos = response;
      console.log(response);
    });
  }
}
