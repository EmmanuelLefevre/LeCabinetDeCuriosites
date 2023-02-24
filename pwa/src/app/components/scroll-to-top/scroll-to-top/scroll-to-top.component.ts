import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
// Add ViewEncapsulation for resolve problems with loading custom scss .mat-tooltip-scroll-to-top in style.scss
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ScrollToTopComponent implements OnInit {

  faAngleDoubleUp = faAngleDoubleUp;

  showScroll: boolean | undefined;
  showScrollHeight = 200;
  hideScrollHeight = 200;

  constructor() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      (
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      ) > this.showScrollHeight
    ) {
      this.showScroll = true;
    } else if (this.showScroll &&
      (
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) < this.hideScrollHeight
    ) {
      this.showScroll = false;
    }
  }

  ngOnInit() {
  }

  scrollToTop() {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
      }
    })();
  }

}
