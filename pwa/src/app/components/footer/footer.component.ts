import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// Add ViewEncapsulation for resolve problems with loading custom scss .mat-tooltip in style.scss
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class FooterComponent implements OnInit {

  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faEnvelope = faEnvelope;
  faPhoneAlt = faPhoneAlt;

  name = environment.application.name;

  constructor() { }

  ngOnInit(): void {}

}
