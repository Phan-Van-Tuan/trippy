import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TourFacade } from '@core/services';
import {
  faClock,
  faUser,
  faUsers,
  faCheck,
  faClose,
  faStar,
  faArrowLeft,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tourDetail',
  templateUrl: './tourDetail.component.html',
  styleUrls: ['./tourDetail.component.scss'],
})
export class TourDetailComponent implements OnInit {
  faClock = faClock;
  faUser = faUser;
  faUsers = faUsers;
  faCheck = faCheck;
  faClose = faClose;
  faLocationDot = faLocationDot;
  tour$ = this.tourFacade.tour$;
  isLoading = false;

  slideConfig = { slidesToShow: 2, slidesToScroll: 2 };
  constructor(private tourFacade: TourFacade, private router: ActivatedRoute) {}

  ngOnInit() {
    this.isLoading = true;
    const tourId = this.router.snapshot.paramMap.get('id');
    if (tourId)
      this.tourFacade
        .getTourById(tourId)
        .subscribe(() => (this.isLoading = false));
  }
}
