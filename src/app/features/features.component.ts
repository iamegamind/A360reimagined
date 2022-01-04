import {Component, OnInit} from '@angular/core';
import {Feature} from '../model/feature';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  features: Feature[] = [
    {
      title: 'Microsite',
      text: 'Once guests take their photo, they are able to text their photo to themselves and brought to an immersive microsite continuing the branding of the event. The microsite is primed to have guests share on their social media right from their phone.'
    },
    {
      title: 'Live texting',
      text: 'Guests are able to text or email their experiences to themselves instantly!'
    }, {
      title: 'Overlay design & Outro animation',
      text: 'Custom-designed overlay and outro animation personalized for your event. Change colors, text, graphics, and add logos, hashtags and more.'
    }
    , {
      title: 'Soundtracks',
      text: 'We make sure that each event has different and royalty-free soundtracks! We take the theme of your event and create perfect music to match.'
    }
    , {title: 'Studio lighting', text: 'We provide LED studio lighting to enhance the quality of the videos'}

  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
