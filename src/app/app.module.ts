import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoGalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
