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
  fontawesome = environment.application.fontawesome;

  features: Array<IFeature> | undefined;

  constructor(private seoService: SeoService) { 

    const content = `Cette application est développé en ${this.version} et met en oeuvre 
    les standarts <abbr>PWA</abbr> (Progressive Web App), le routing, ainsi que le lazy-loading.`;

    const title = `${this.name} : Page d\'accueil`;

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

    this.features = [
        {
          name: 'Services',
          description: 'Utilise des services pour l\'email, la snackbar, le load-spinner et le SEO.',
          icon: 'fas fa-handshake',
          link: 'services'
        },
        {
          name: 'Formulaire réactif',
          description: 'Une approche basée sur un modèle pour gérer les saisies de formulaire.',
          icon: 'far fa-file-alt',
          link: 'formulaires'
        },
        {
          name: 'Template Driven',
          description: 'Les formulaires sont l\'un des piliers des applications métier.',
          icon: 'far fa-file-alt',
          link: 'formulaires'
        },
    ];
    
  }

  ngOnInit(): void {}

}
