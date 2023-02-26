import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import * as AOS from 'aos';
import { filter } from 'rxjs';

import { SeoService } from './_services/seo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private metaService: Meta,
              private seoService: SeoService) {}

  ngOnInit(): void {
    // Leaflet Map
    AOS.init();
    window.addEventListener('load', AOS.refresh);

    // SEO  Meta/Title + Dynamic og:title
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(
      () => {
        var rt = this.getChild(this.activatedRoute) 
        rt.data.subscribe((data: { ogDescription: any; 
                                   ogTitle: any; }) => {

          this.seoService.setTitle();
          this.seoService.addTags();
 
          if (data.ogTitle) {
            this.metaService.updateTag({ property: 'og:title', content: data.ogTitle })
          } else {
            this.metaService.removeTag("property='og:title'")
          }
 
        })
      }
    )
  }

  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }

}
