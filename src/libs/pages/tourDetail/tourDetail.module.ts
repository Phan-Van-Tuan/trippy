import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourDetailComponent } from './tourDetail.component';
import { Routes, RouterModule } from '@angular/router';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RatingModule } from "../../core/component/rating/rating.module";
import { LoadingModule } from '@core/component/loading';
const routes: Routes = [
  {
    path: '',
    component: TourDetailComponent,
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NzCarouselModule,
    FontAwesomeModule,
    NzTabsModule,
    LoadingModule,
  ],
  declarations: [TourDetailComponent],
})
export class TourDetailModule {}
