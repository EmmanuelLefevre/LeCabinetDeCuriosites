import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// Add ViewEncapsulation for resolve problems with loading custom scss .mat-tooltip-social in style.scss
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { environment } from '../../../environments/environment';

import { SeoService } from 'src/app/_services/seo.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {

  faFacebook = faFacebook;
  faInstagram = faInstagram;

  // SEO
  name = environment.application.name;
  version = environment.application.version;
  colorTheme = environment.application.colorTheme;

  constructor(private seoService: SeoService) { 

    const description = `Le Cabinet de curiosités, club de robotique et stages scientifiques à Angoulême."`;
    const keywords = `Ateliers et stages, robotiques, électroniques, mécanique informatiqe, club de science, fablab, pédagogie pour les jeunes, Grand-Angoulême, Gond-Pontouvre, Charente.`;
    const name = `Nicolas Clément Makerspot Le Cabinet de Curiosités`;
    const colorValue = `${this.colorTheme}`
    const title = `${this.name}`;

    this.seoService.setMetaDescription(description);
    this.seoService.setMetaKeywords(keywords);
    this.seoService.setMetaName(name);
    this.seoService.setMetaColorTheme(colorValue);
    this.seoService.setMetaTitle(title);
    
  }

  ngOnInit(): void {}

}
