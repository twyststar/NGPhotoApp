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
  currentPhoto: number;
  currentIndex: number;

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

  private findPhoto(index) {
    console.log('clicked ' + index);
    this.currentPhoto = this.myPhotos[index].id;
    this.currentIndex = index;
    this.ngxSmartModalService.setModalData(index, 'photoModal');
    console.log('set modal to ' + index);
  }

  private nextPhoto() {
    if (this.currentIndex > this.myPhotos.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = this.currentIndex + 1;
    }
    this.currentPhoto = this.myPhotos[this.currentIndex].id;
  }

  // private prevPhoto(index) {

  // }
}
