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
  photos: Array<any> = [];
  aePhotos: Array<any> = [];
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
          this.aePhotos.push(this.photos[i]);
        }
      }
    });
  }

  public findPhoto(index) {
    this.currentPhoto = this.aePhotos[index].id;
    this.currentIndex = index;
    this.ngxSmartModalService.setModalData(index, 'photoModal');
  }

  public nextPhoto() {
    this.currentIndex =
      this.currentIndex === this.aePhotos.length - 1 ?
      (this.currentIndex = 0) :
      (this.currentIndex = this.currentIndex + 1);
    this.currentPhoto = this.aePhotos[this.currentIndex].id;
  }

  public prevPhoto() {
    this.currentIndex =
      this.currentIndex === 0 ?
      (this.currentIndex = this.aePhotos.length - 1) :
      (this.currentIndex = this.currentIndex - 1);
    this.currentPhoto = this.aePhotos[this.currentIndex].id;
  }
}
