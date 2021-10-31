/**
* Dummy image data service.
*
* An observable is used to easily replace this service and
* retrieve images from another source asynchronously.
*
* @author Jose Danado (jose.danado@gmail.com)
*/
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})

export class ImageDataService {

  constructor() { }

  /**
   * Retrieves data for the images to the displayed. The service uses an Observable
   * to easily replace the functionality with an HTTP request, if needed.
   * @returns Observable<Image[]> An observable with an array of images
   */
  getData(): Observable<Image[]> {
    return of([
      {
        name: 'Boat',
        description: 'Flat water',
        src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg'
      },
      {
        name: 'Mountain',
        description: 'In the ice',
        src: 'https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg'
      },
      {
        name: 'Mountains',
        description: 'View from the top',
        src: 'https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg'
      },
      {
        name: 'Sunset by the sea',
        description: 'Near the water',
        src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg'
      },
      {
        name: 'Sunset',
        description: 'A sunset view',
        src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg'
      },
      {
        name: 'Blue sky',
        description: 'Great view',
        src: 'https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg'
      }
    ]);
  }
}
