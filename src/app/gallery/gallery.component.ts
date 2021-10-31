/**
 * Sample gallery component. Uses a Data service to fetch information.
 *
 * @author Jose Danado (jose.danado@gmail.com)
 */
import { Component, OnInit } from '@angular/core';

import { ImageDataService } from '../shared/services/image-data.service';
import { Image } from '../shared/models/image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [ImageDataService],
})

export class GalleryComponent implements OnInit {
  /**
   * Hold the images for this component
   * @private @type {Array<Image>} An array of image data
   */
  images: Image[];

  constructor(private imageDataService: ImageDataService) { }

  /**
   * Fetches image data at startup
   */
  ngOnInit() {
    this.imageDataService.getData()
      .subscribe(images => this.images = images);
  }

}
