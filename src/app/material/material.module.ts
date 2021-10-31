/**
* Material module.
*
* This module loads all the required material submodules
* @author Jose Danado (jose.danado@gmail.com)
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule
  ],
  exports: [
    CommonModule, MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule
  ],
  declarations: []
})
export class MaterialModule { }
