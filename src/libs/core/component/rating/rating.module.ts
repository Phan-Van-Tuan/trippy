import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingStarsComponent } from './rating.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [RatingStarsComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [RatingStarsComponent]
})

export class RatingModule { }
