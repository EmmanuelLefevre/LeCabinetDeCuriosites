import { Component, OnInit } from '@angular/core'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faEnvelope = faEnvelope;
  faPhoneAlt = faPhoneAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
