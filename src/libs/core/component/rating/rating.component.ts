import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingStarsComponent {
  faStar = faStar;
  stars = [0, 1, 2, 3, 4];
  selectedStar: number = -1;
  hoveredStar = -1;

  hoverStar(index: number) {
    this.hoveredStar = index;
  }

  selectStar(index: number) {
    this.selectedStar = index;
  }
  
  resetHoveredStar() {
    this.hoveredStar = -1;
  }
}
