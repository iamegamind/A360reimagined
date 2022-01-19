import {Component, OnInit} from '@angular/core';
import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }

  brandIcon = {
    facebook: faFacebook,
    twitter: faTwitter,
    instagram: faInstagram
  }

  legacyIcon = {
    tel: faPhone,
    email: faEnvelope
  }

}
