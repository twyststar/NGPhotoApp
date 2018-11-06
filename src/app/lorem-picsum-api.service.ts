import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoremPicsumApiService {

  constructor(private http: Http) { }

  getPhotos() {
    return this.http.get(`https://picsum.photos/list`);
  }
}
