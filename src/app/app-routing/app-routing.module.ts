/**
* Module to deal with Application routing.
*
* Most components are loaded here to enable routing and
* load them to be used by main components.
*
* @author Jose Danado (jose.danado@gmail.com)
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

/**
 * Material module
 * @private
 */
import { MaterialModule } from '../material/material.module';

/**
* Application components
* @private
*/
import { AppComponent } from '../app.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { AboutComponent } from '../about/about.component';
import { GalleryImageComponent } from '../shared/components/gallery-image/gallery-image.component';

/**
* Existing routes for this application. The default route is the gallery.
* @private
*/
const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '', redirectTo: '/gallery', pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    FormsModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    GalleryComponent,
    GalleryImageComponent,
    AboutComponent,
  ],
  exports: [ RouterModule ],
  bootstrap: [ AppComponent ]
})
export class AppRoutingModule {}
