import { Component, OnInit } from '@angular/core';
import { LoremPicsumApiService } from '../../services/lorem-picsum-api.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {
  photos: Object = {};
  myPhotos: Array<object> = [];

  constructor(private loremPicsumApiService: LoremPicsumApiService) {}

  ngOnInit() {
    this.getPhotos();
  }

  public getPhotos() {
    this.loremPicsumApiService.getPhotos().subscribe(response => {
      this.photos = response;
      console.log(response[0].author);
      for (let i = 0; i < this.photos.length; i++) {
        if (this.photos[i].author === 'Alejandro Escamilla') {
          this.myPhotos.push(this.photos[i]);
        }
      }
      console.log(this.myPhotos);
    });
  }

}
