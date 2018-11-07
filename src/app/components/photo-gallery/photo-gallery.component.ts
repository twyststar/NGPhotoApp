import { Component, OnInit } from '@angular/core';
import { LoremPicsumApiService } from '../../services/lorem-picsum-api.service';
// import { isNgTemplate } from '@angular/compiler';
import { NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {
  photos: Array<object> = [];
  myPhotos: Array<object> = [];

  constructor(
    private loremPicsumApiService: LoremPicsumApiService,
    public ngxSmartModalService: NgxSmartModalService
  ) {}

  ngOnInit() {
    this.getPhotos();
  }

  public getPhotos() {
    this.loremPicsumApiService.getPhotos().subscribe(response => {
      this.photos = response;
      for (let i = 0; i < this.photos.length; i++) {
        if (this.photos[i].author === 'Alejandro Escamilla') {
          this.myPhotos.push(this.photos[i]);
        }
      }
      console.log(this.myPhotos);
    });
  }

  public clicked(id) {
    console.log('clicked ' + id);
  }
}
