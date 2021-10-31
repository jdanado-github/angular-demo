/**
* Generic Gallery component with photo description and
* some basic animations
*
* @author Jose Danado (jose.danado@gmail.com)
*/
import { Component, Input, OnInit } from '@angular/core';

import { Image } from '../../models/image';

@Component({
  selector: 'app-gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.css']
})

export class GalleryImageComponent implements OnInit {

  /**
   * Input for this component.
   * @type Image[] The list of images.
   */
  @Input() list: Image[];

  constructor() { }

  ngOnInit() {
  }

}
