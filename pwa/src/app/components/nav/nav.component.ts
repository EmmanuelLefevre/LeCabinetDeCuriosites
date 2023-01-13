import { Component, HostBinding, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  faBars = faBars

  @HostBinding('class.burger-opened') burgerOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBurger() {
    if (window.innerWidth < 768) {
      this.burgerOpened = !this.burgerOpened;
    }
  }

}
