import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// Add ViewEncapsulation for resolve problems with loading custom scss .mat-tooltip-social in style.scss
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { environment } from '../../../environments/environment';

import { SeoService } from 'src/app/_services/seo.service';
import { IFeature } from 'src/app/_interfaces/IFeature';


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

  features: Array<IFeature> | undefined;

  constructor(private seoService: SeoService) { 

    const description = `Le Cabinet de curiosités, club de robotique et stages scientifiques à Angoulême."`;
    const description2 = `Ce site est développé en ${this.version} et met en oeuvre les standarts PWA (Progressive Web App), le routing ainsi que le lazy-loading.`;
    const keywords = `Ateliers et stages, robotiques, électroniques, mécanique informatiqe, club de science, fablab, pédagogie pour les jeunes, Grand-Angoulême, Gond-Pontouvre, Charente.`
    const name = `Nicolas Clément Makerspot Le Cabinet de Curiosités`
    const title = `${this.name}`;

    this.seoService.setMetaDescription(description);
    this.seoService.setMetaDescription2(description2);
    this.seoService.setMetaKeywords(keywords);
    this.seoService.setMetaName(name);
    this.seoService.setMetaTitle(title);

    this.features = [
      {
        name: 'Services',
        description: 'Utilise des services pour l\'email, la snackbar, le load-spinner et le SEO.',
        icon: 'fas fa-handshake'
      },
      {
        name: 'Formulaire réactif',
        description: 'Une approche basée sur un modèle pour gérer les saisies de formulaire.',
        icon: 'far fa-file-alt'
      },
      {
        name: 'Template Driven',
        description: 'Les formulaires sont l\'un des piliers des applications métier.',
        icon: 'far fa-file-alt'
      },
    ];
    
  }

  ngOnInit(): void {}

}
