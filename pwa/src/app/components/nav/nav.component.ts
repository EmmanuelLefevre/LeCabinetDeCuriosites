import { Component, OnInit, HostBinding, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  faBars = faBars

  @ViewChild('welcome')
  liWelcome!: ElementRef;
  @ViewChild('contact')
  liContact!: ElementRef;

  @HostBinding('class.burger-opened') burgerOpened = false;
  
  constructor(private router: Router) { }
  
  ngOnInit(): void { }
  
  toggleBurger() {
    if (window.innerWidth < 768) {
      this.burgerOpened = !this.burgerOpened;
    }
  }
  
  @HostListener('window:scroll', ['$event'])
  scrollHandler(_$event: any) { 
    if (window.pageYOffset > 2100) {
      this.liContact.nativeElement.classList.add("active-link");
      this.liWelcome.nativeElement.classList.remove("active-link");
    } else if(this.router.url === '/workshop' || this.router.url === '/internship') {
      this.liWelcome.nativeElement.classList.remove("active-link");
      this.liContact.nativeElement.classList.remove("active-link");
    } else {
      this.liContact.nativeElement.classList.remove("active-link");
      this.liWelcome.nativeElement.classList.add("active-link");
    }
  }

}
